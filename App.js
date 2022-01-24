import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from "react";
import { RestrauntScreen } from './src/features/restraunts/screen/restraunt.screen';
import {ThemeProvider} from "styled-components/native";
import {theme} from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import {NavigationContainer, NavigationController} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from './src/components/typography/text.component';
import { SafeArea } from './src/components/utility/safe-area.component';

const Tab=createBottomTabNavigator();

const Settings=()=>(
  <SafeArea>
  <Text variant="label">Settings</Text>
  </SafeArea>
);
const Map=()=>(
  <SafeArea>
  <Text variant="label">Map</Text>
  </SafeArea>
);


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
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown:false
            }}
          >
          <Tab.Screen name="Restraunts" component={RestrauntScreen}></Tab.Screen>
          <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
          <Tab.Screen name="Map" component={Map}></Tab.Screen>
          </Tab.Navigator>
          </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto"></ExpoStatusBar>
    
    </>
  );}
}

