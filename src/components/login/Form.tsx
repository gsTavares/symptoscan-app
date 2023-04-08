import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../../../assets/logo_tg_app.svg";
import colors from "tailwindcss/colors";
import { Input } from "./Input";

export const Form = () => {

    const navigation = useNavigation();

    return (
        <View className="items-center justify-center mt-[10vh]">
            <View className="items-center">
                <Text className="font-bold text-3xl text-slate-700 mb-3">PROJECT_NAME</Text>
                <Logo />
            </View>

            <View className="w-full px-6">
                <Input label="e-mail"
                    keyboardType="email-address"
                    placeholder="example@email.com"
                    cursorColor={colors.slate[500]}
                    secureTextEntry={false} />

                <Input label="password"
                    keyboardType="default"
                    secureTextEntry={true}
                    cursorColor={colors.slate[500]}
                    placeholder="ex. 123" />

                <View className="mt-10">
                    <Pressable className="bg-green-500 rounded-md px-5 h-12 flex-row justify-between items-center">
                        <Text className="text-white font-semibold">LOGIN</Text>
                        <Ionicons name="log-in-outline" color={colors.white} size={32} />
                    </Pressable>

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
                </View>
            </View>
        </View>
    )
}