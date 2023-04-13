import { OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold, useFonts } from "@expo-google-fonts/open-sans";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { Routes } from "./src/routes/app.routes";

export default function App() {

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold
  })

  if (!fontsLoaded) {
    return null; // futurally, "null" will be replaced with a loading component
  }

  return (
    <>
      <Routes />
      <StatusBar style="light" translucent hidden />
    </>
  );
}
