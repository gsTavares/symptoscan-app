import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { Intensity, Symptom } from "../../model/Symptom";

interface IntensityIndicatorProps extends TouchableOpacityProps {
    symptom: Symptom
}

const handleIntensityColor = (intensity: Intensity): string => {
    return intensity === Intensity.LOW ? "bg-green-400"
        : intensity === Intensity.MODERATE ? "bg-yellow-400" : "bg-red-400";
}

const handleIntensityLabel = (intensity: Intensity): string => {
    return intensity === Intensity.LOW ? "LOW"
        : intensity === Intensity.MODERATE ? "MODERATE" : "HIGHER";
}

export const IntensityIndicator = ({symptom, onPress}: IntensityIndicatorProps) => {
    return (
        <TouchableOpacity activeOpacity={0.7}
                        className={`${handleIntensityColor(symptom.intensity!)} py-2 my-3 w-[50%] rounded-md`}
                        onPress={onPress}>
                        <Text className="text-center text-white">{handleIntensityLabel(symptom.intensity!)}</Text>
                    </TouchableOpacity>
    )
}