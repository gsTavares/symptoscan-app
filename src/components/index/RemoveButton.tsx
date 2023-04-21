import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface RemoveButtonProps extends TouchableOpacityProps {
    color: string,
    size: number
}

export const RemoveButton = ({onPress, size, color} : RemoveButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={0.7}
            onPress={onPress}>
            <Ionicons name="close" size={size} color={color} />
        </TouchableOpacity>
    )
}