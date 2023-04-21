import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MotiView } from "moti";
import { useContext, useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import colors from "tailwindcss/colors";
import Logo from "../../../assets/logo_tg_app.svg";
import { AuthErrorDTO, LoginDTO } from "../../routes/util/auth";
import { AuthContext } from "../../routes/util/auth.context";

export const Form = () => {

    const navigation = useNavigation();
    const { login } = useContext(AuthContext);
    const [data, setData] = useState<LoginDTO>({} as LoginDTO);
    const [message, setMessage] = useState<string>("");

    const handleLogin = async () => {
        const rs = await login(data);
        if (rs.status === 401) {
            const error = rs as AuthErrorDTO;
            setMessage(error.message);
        }
    }

    return (
        <View className="items-center justify-center mt-[10vh]">
            <View className="items-center">
                <MotiView from={{opacity: 0}} animate={{opacity: 1}} transition={{type: "timing", duration: 500}}>
                    <Text className="font-bold text-3xl text-slate-700 mb-3">PROJECT_NAME</Text>
                    <Text className="font-bold text-xl text-slate-700 mb-3 text-center">SUBTITLE</Text>
                </MotiView>
                <MotiView from={{scale: 0}} animate={{scale: 1}} transition={{type: "spring", damping: 50}} delay={800}>
                    <Logo />
                </MotiView>
            </View>

            <MotiView from={{paddingTop: 500}}
                      animate={{paddingTop: 0}}
                      transition={{type: "timing", duration: 800}} delay={1000} className="w-full px-6">
                <View className="mt-3">
                    <Text className="text-lg font-semibold text-slate-600">E-MAIL</Text>
                    <TextInput className="bg-white border-2 border-slate-400 rounded-md h-12 px-3 focus:border-blue-500 text-slate-800 font-regular"
                        keyboardType="email-address"
                        cursorColor={colors.slate[500]}
                        placeholder="example@email.com"
                        secureTextEntry={false}
                        value={data.email}
                        onChangeText={(value) => {
                            setData((prevState) => ({
                                ...prevState,
                                email: value
                            }));
                        }} />
                </View>

                <View className="mt-3">
                    <Text className="text-lg font-semibold text-slate-600">PASSWORD</Text>
                    <TextInput className="bg-white border-2 border-slate-400 rounded-md h-12 px-3 focus:border-blue-500 text-slate-800 font-regular"
                        keyboardType="default"
                        cursorColor={colors.slate[500]}
                        placeholder="ex. 123"
                        secureTextEntry
                        value={data.password}
                        onChangeText={(value) => {
                            setData((prevState) => ({
                                ...prevState,
                                password: value
                            }));
                        }} />
                </View>

                <View className="mt-10">
                    <TouchableOpacity activeOpacity={0.8} className="bg-green-500 rounded-md px-5 h-12 flex-row justify-between items-center"
                        onPressOut={handleLogin}
                    >
                        <Text className="text-white font-semibold">LOGIN</Text>
                        <Ionicons name="log-in-outline" color={"white"} size={32} />
                    </TouchableOpacity>

                    <View className="mt-5 flex-row justify-center">
                        <Text className="font-regular">Do not have an account? </Text>
                        <Pressable onPress={() => {
                            navigation.navigate("register");
                        }}>
                            <Text className="font-semibold">Register</Text>
                        </Pressable>
                    </View>

                    <View className="items-center">
                        <Text>All rights reserved - 2023</Text>
                    </View>

                    <View className="mt-2">
                        <Text className="font-semibold text-center text-red-400">{message}</Text>
                    </View>
                </View>
            </MotiView>
        </View>
    )
}