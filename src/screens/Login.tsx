import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";

export const Login = () => {
    const navigation = useNavigation();

    return (
        <View className="flex-1 items-center justify-center">
            <Text>Login</Text>
            <Pressable onPress={() => navigation.navigate("register")} >
                <Text className="font-semibold">Go to register</Text>
            </Pressable>
        </View>
    )
}