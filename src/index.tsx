import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ContextProvider from './context';
import Routes from './routes';

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
    <ContextProvider>
      <NavigationContainer>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <Routes />
      </NavigationContainer>
    </ContextProvider>
  );
}
