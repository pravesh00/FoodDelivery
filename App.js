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
import {Ionicons} from '@expo/vector-icons';
import { RestarauntContextProvider } from './src/services/restaurants/restaurant.context';

const Tab=createBottomTabNavigator();

const TAB_ICON={
  Restraunts:"md-restaurant",
  Settings:"md-settings",
  Map:"md-map"
};

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

const tabBarIcon=(Icon)=>({size,color})=><Ionicons name={Icon} color={color} size={size}/>;
const screenOptions=({route})=>{
  const Icon=TAB_ICON[route.name];
    return{
      tabBarIcon:tabBarIcon(Icon),
      headerShown:false
    }
}


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
        <RestarauntContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
          <Tab.Screen name="Restraunts" component={RestrauntScreen}></Tab.Screen>
          <Tab.Screen name="Map" component={Map}></Tab.Screen>
          <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
          </Tab.Navigator>
          </NavigationContainer>
          </RestarauntContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto"></ExpoStatusBar>
    
    </>
  );}
}

