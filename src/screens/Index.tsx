import { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { AuthContext } from "../routes/util/auth.context";

export const Index = () => {

    const { logout } = useContext(AuthContext);

    return (
        <View className="flex-1 justify-center items-center">
            <Text>Index</Text>
            <Pressable onPress={logout}>
                <Text>Logout</Text>
            </Pressable>
        </View>
    )
}