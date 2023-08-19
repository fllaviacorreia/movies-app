import 'react-native-gesture-handler';

import React, {useCallback} from 'react';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

import { AppNavigator } from './src/navigation/AppNavigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat/static/Montserrat-Medium.ttf'),
    'Open-Sans': require('./assets/fonts/Open_Sans/static/OpenSans-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppNavigator/>
  );
}