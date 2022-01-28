import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from "react";
import {ThemeProvider} from "styled-components/native";
import {theme} from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import { Navigation } from './src/infrastructure/navigation';
import { RestarauntContextProvider } from './src/services/restaurants/restaurant.context';
import {LocationContextProvider} from './src/services/location/location.context';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if((!oswaldLoaded || !latoLoaded )){
    return <AppLoading/>;
  }else{
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
        <RestarauntContextProvider>
          <Navigation/>
          </RestarauntContextProvider>
          </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto"></ExpoStatusBar>
    
    </>
  );}
}

