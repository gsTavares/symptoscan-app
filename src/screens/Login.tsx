import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Logo from '../../assets/logo_tg_app.svg';
import colors from "tailwindcss/colors";

export const Login = () => {
    const navigation = useNavigation();

    return (
        <ScrollView className="bg-slate-200 h-full" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop: 20}}>
            <View className="items-center justify-center mt-[10vh]">
                <View className="items-center">
                    <Text className="font-bold text-3xl text-slate-700 mb-3">PROJECT_NAME</Text>
                    <Logo />
                </View>

                <View className="w-full px-6">
                    <View>
                        <Text className="text-lg font-semibold text-slate-600">E-MAIL</Text>
                        <TextInput className="bg-slate-100 border border-slate-400 rounded-md h-10 px-3 focus:border-blue-500 text-slate-800 font-regular"
                            keyboardType="email-address"
                            cursorColor={colors.slate[500]}
                            placeholder="example@email.com" />
                    </View>

                    <View className="mt-3">
                        <Text className="text-lg font-semibold text-slate-600">PASSWORD</Text>
                        <TextInput className="bg-slate-100 border border-slate-400 rounded-md h-10 px-3 text-slate-500 focus:border-blue-500 font-regular"
                            keyboardType="default"
                            secureTextEntry
                            cursorColor={colors.slate[500]}
                            placeholder="ex. 123" />
                    </View>

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
        </ScrollView>
    )
}