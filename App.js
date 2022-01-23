import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from "react";
import { RestrauntScreen } from './src/features/restraunts/screen/restraunt.screen';
import {ThemeProvider} from "styled-components/native";
import {theme} from './src/infrastructure/theme';
import {Platform} from "react-native";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';

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
      <RestrauntScreen></RestrauntScreen>
      </ThemeProvider>
      <ExpoStatusBar style="auto"></ExpoStatusBar>
    
    </>
  );}
}

