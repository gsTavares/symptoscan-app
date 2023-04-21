import { Ionicons } from "@expo/vector-icons";
import { MotiView } from "moti";
import { useContext, useEffect, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";
import { IntensityIndicator } from "../components/index/IntensityIndicator";
import { RemoveButton } from "../components/index/RemoveButton";
import { SymptomBreadcrumb } from "../components/index/SymptomBreadcrumb";
import { Intensity, Symptom } from "../model/Symptom";
import { AuthContext } from "../routes/util/auth.context";

export const Index = () => {

    const { logout } = useContext(AuthContext);
    const [symptons, setSymptons] = useState<Symptom[]>([]);
    const [selectedSymptons, setSelectedSymptons] = useState<Symptom[]>([]);
    const [symptomFilter, setSymptomFilter] = useState<string>("");

    useEffect(() => {
        // This will come from database
        setSymptons([
            { id: 1, description: "Pain chest", intensity: Intensity.LOW },
            { id: 2, description: "Abdomen acute", intensity: Intensity.LOW },
            { id: 3, description: "Distended abdomen", intensity: Intensity.LOW },
            { id: 4, description: "Pain back", intensity: Intensity.LOW },
            { id: 5, description: "Pain neck", intensity: Intensity.LOW },
            { id: 6, description: "Nausea", intensity: Intensity.LOW },
            { id: 7, description: "Heartburn", intensity: Intensity.LOW }
        ])
    }, [])

    const filteredSymptons: Symptom[] = symptomFilter === "" ? [] : (
        symptons.filter(s => s.description.toLowerCase().includes(symptomFilter.toLowerCase()))
    );

    const handleSymptomFilter = (value: string): void => {
        setSymptomFilter(value);
    }

    const handleSymptomBreadcrumbs = (): JSX.Element[] => {
        if (!symptomFilter) {
            return symptons.map(s => {
                return (
                    <SymptomBreadcrumb key={s.id} symptom={s} onPress={() => {
                        setSelectedSymptons((prevState) => {
                            return [s, ...prevState];
                        });
                        setSymptons((prevState) => {
                            return prevState.filter((symptom) => symptom.id !== s.id);
                        })
                    }} />
                )
            });
        } else {
            return filteredSymptons.map(s => {
                return (
                    <SymptomBreadcrumb key={s.id} symptom={s} onPress={() => {
                        setSelectedSymptons((prevState) => {
                            return [s, ...prevState];
                        });
                        setSymptons((prevState) => {
                            return prevState.filter((symptom) => symptom.id !== s.id);
                        })
                    }} />
                )
            });
        }
    }

    const handleIntensityChange = (symptom: Symptom) => {
        setSelectedSymptons((prevState) => {
            return prevState.map(s => {
                if (s.id === symptom.id)
                    s.intensity! += s.intensity === 2 ? -2 : 1;
                return s;
            });
        })
    }

    const handleSelectedSymptons = () => {
        const removeFromSelectedSymptons = (toRemove: Symptom) => {
            setSelectedSymptons((prevState) => {
                return prevState.filter(s => s.id !== toRemove.id);
            });
            setSymptons((prevState) => {
                return [...prevState, toRemove];
            })
        }

        return selectedSymptons.map(selectedSymptom => {
            return (
                <MotiView className="w-[250px] bg-zinc-100 mr-3 px-3 rounded-md mt-2" key={selectedSymptom.id} from={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ type: "timing", duration: 500 }}>
                    <View className="flex-row items-center mt-2">
                        <Text className="font-semibold text-lg mr-auto">{selectedSymptom.description}</Text>
                        <RemoveButton
                            size={32}
                            color={colors.red[500]}
                            onPress={() => removeFromSelectedSymptons(selectedSymptom)} />
                    </View>
                    <IntensityIndicator
                        symptom={selectedSymptom}
                        onPress={() => handleIntensityChange(selectedSymptom)} />
                </MotiView>
            )
        });
    }

    return (
        <ScrollView className="flex-1 bg-blue-50" keyboardShouldPersistTaps="always">
            <View className="flex-row items-stretch px-5 pt-5 pb-12 bg-blue-400">
                <View>
                    <Text className="font-bold text-2xl text-white">Hi [user_name]!</Text>
                </View>

                <View className="ml-auto">
                    <TouchableOpacity onPress={logout}>
                        <Ionicons name="log-out-outline" size={40} color={colors.white} />
                    </TouchableOpacity>
                </View>
            </View>

            <View className="-mt-6 bg-white w-11/12 self-center rounded-md py-3 shadow-2xl">
                <View>
                    <Text className="font-semibold text-center text-lg">How are you feeling today?</Text>
                </View>
                <View className="mt-5 px-3 items-center">
                    <TextInput className="border-2 border-slate-400 w-full h-10 rounded-md pl-3"
                        placeholder="Search for symptons"
                        value={symptomFilter}
                        onChangeText={handleSymptomFilter} />
                </View>
                <ScrollView className="my-3 h-44 bg-white" contentContainerStyle={{ paddingVertical: 20 }}
                    showsVerticalScrollIndicator={false}>
                    <View className="flex-row flex-wrap gap-y-3 justify-between">
                        {handleSymptomBreadcrumbs()}
                    </View>

                </ScrollView>

                <View className="mt-5">
                    <Text className="text-lg font-semibold px-3">Selected symptons</Text>
                    <ScrollView horizontal className="px-3" showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingRight: 12 }} >
                        {handleSelectedSymptons()}
                    </ScrollView>

                    <View className="px-3">
                        <TouchableOpacity activeOpacity={0.7} className="bg-blue-400 rounded-md mt-3">
                            <Text className="text-center font-semibold text-white py-2">Analyse</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View>
                <Text className="font-semibold mt-5 text-xl text-center">Your recentelly recomendations</Text>
            </View>
        </ScrollView>
    )
}