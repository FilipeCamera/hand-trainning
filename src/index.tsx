import { StatusBar } from "expo-status-bar";
import React from "react";
import Initial from "./screens/Initial";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import PublicNavigation from "./routes/PublicNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <NavigationContainer>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <PublicNavigation />
    </NavigationContainer>
  );
}
