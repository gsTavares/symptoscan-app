import 'react-native-reanimated'
import "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useFonts, OpenSans_400Regular } from "@expo-google-fonts/open-sans";
import { MotiView } from 'moti';

export default function App() {

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular
  })

  if (!fontsLoaded) {
    return null; // futurally, "null" will be replaced with a loading component
  }

  return (
    <MotiView from={{opacity: 0}} animate={{opacity: 1}} transition={{type: "timing"}} className="flex-1 items-center justify-center bg-slate-300">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </MotiView>
  );
}
