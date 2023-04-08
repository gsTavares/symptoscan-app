import { View, Text, TextInput } from "react-native";
import { KeyboardTypeOptions } from "react-native";

interface InputProps {
    label: string,
    keyboardType: KeyboardTypeOptions,
    cursorColor: string,
    placeholder: string,
    secureTextEntry: boolean
}

export const Input = (props: InputProps) => {
    return (
        <View className="mt-3">
            <Text className="text-lg font-semibold text-slate-600">{props.label.toUpperCase()}</Text>
            <TextInput className="bg-slate-100 border border-slate-400 rounded-md h-10 px-3 focus:border-blue-500 text-slate-800 font-regular"
                keyboardType={props.keyboardType}
                cursorColor={props.cursorColor}
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry} />
        </View>
    )
}