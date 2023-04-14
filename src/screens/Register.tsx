import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, View } from "react-native";
import colors from "tailwindcss/colors";

export const Register = () => {
    const navigation = useNavigation();
    return (
        <View className="mt-10 ml-3 flex-row justify-start">
            <Pressable onPress={() => {
                navigation.goBack();
            }}>
                <EvilIcons name="arrow-left" size={50} color={colors.blue[500]} />
            </Pressable>
        </View>
    )
}