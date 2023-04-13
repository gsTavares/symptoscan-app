import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useMemo, useReducer } from "react";
import { API, AxiosError } from "../lib/axios";
import { get, remove, store } from "../lib/secure.storage";
import { Index } from "../screens/Index";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { AuthErrorDTO, AuthSuccessDTO, LoginDTO, RegisterDTO } from "./util/auth";
import { AuthContext, AuthMethods } from "./util/auth.context";

const { Navigator, Screen } = createStackNavigator();

export const Routes = () => {
    const [state, dispatch] = useReducer((prevState: any, action: any) => {
        switch (action.type) {
            case "RESTORE_TOKEN":
                return {
                    ...prevState,
                    userToken: action.token
                };
            case "LOGIN":
                return {
                    ...prevState,
                    isSignOut: false,
                    userToken: action.token
                };
            case "LOGOUT":
                return {
                    ...prevState,
                    isSignOut: true,
                    userToken: null
                };
        }
    }, { isSignOut: false, userToken: null });

    useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken: any;
            try {
                userToken = await get("accessToken");
            } catch (error) {
                console.log(error);
            }

            if (userToken) {
                API.get("/person/validate-token", {
                    headers: {
                        authorization: userToken
                    }
                }).then(_ => {
                    dispatch({ type: "RESTORE_TOKEN", token: userToken });
                }).catch((error: AxiosError) => {
                    const errorBody = error.response!.data as AuthErrorDTO;
                    console.log(errorBody.message);
                    dispatch({ type: "RESTORE_TOKEN", token: null });
                })
            }
        }
        bootstrapAsync();
    }, []);

    const authContext = useMemo<AuthMethods>(() => ({
        login: async (data: LoginDTO) => {
            return API.post("/login", data).then(response => {
                store("accessToken", response.headers.authorization);
                return response.data! as AuthSuccessDTO;
            }).then(successAuth => {
                store("refreshToken", successAuth.refreshToken);
                dispatch({ type: "LOGIN", token: get("accessToken") });
                return successAuth;
            }).catch((error: AxiosError) => {
                const errorBody = error.response!.data as AuthErrorDTO;
                return errorBody;
            });
        },
        logout: async () => {
            remove("accessToken");
            remove("refreshToken");
            dispatch({ type: "LOGOUT" })
        },
        register: async (data: RegisterDTO) => {
            API.post("/patient", data).catch((error: AxiosError) => console.log(error.response!.data));
        }
    }), []);

    return (
        <NavigationContainer>
            <AuthContext.Provider value={authContext}>
                <Navigator screenOptions={{ headerShown: false }}>
                    {state.userToken == null ? (
                        <>
                            <Screen name="login" component={Login} />
                            <Screen name="register" component={Register} />
                        </>
                    ) : (
                        <Screen name="index" component={Index} />
                    )}
                </Navigator>
            </AuthContext.Provider>
        </NavigationContainer>
    )
}