import { MotiView } from "moti";
import { Symptom } from "../../model/Symptom";
import { TouchableOpacityProps, TouchableOpacity, Text } from "react-native";

interface SymptomBreadcrumbProps extends TouchableOpacityProps {
    symptom: Symptom
}

export const SymptomBreadcrumb = ({ symptom, ...props }: SymptomBreadcrumbProps) => {
    return (
        <MotiView from={{ flexGrow: 0 }}
            animate={{ flexGrow: 1 }}
            transition={{ type: "spring" }}
            key={symptom.id}>
            <TouchableOpacity onPress={props.onPress} activeOpacity={0.7} className="p-2 mx-2 my-1 rounded-md bg-zinc-100">
                <Text className="font-bold">{symptom.description}</Text>
            </TouchableOpacity>
        </MotiView>
    )
}