import {NavigationContainer} from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{Settings} from "../../features/restraunts/screen/settings.screen";
import{Map} from "../../features/map/screen/map.screen";
import { RestarauntNavigator } from "./restaraunts.navigator";

const Tab=createBottomTabNavigator();

const TAB_ICON={
    Restraunts:"md-restaurant",
    Settings:"md-settings",
    Map:"md-map"
  };

const tabBarIcon=(Icon)=>({size,color})=><Ionicons name={Icon} color={color} size={size}/>;
const screenOptions=({route})=>{
  const Icon=TAB_ICON[route.name];
    return{
      tabBarIcon:tabBarIcon(Icon),
      headerShown:false,
      tabBarActiveTintColor:"tomato",
      tabBarInactiveTintColor:"grey"
    }
}

export const AppNavigator=()=>{
    return(
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={screenOptions}
          >
          <Tab.Screen name="Restraunts" component={RestarauntNavigator}></Tab.Screen>
          <Tab.Screen name="Map" component={Map}></Tab.Screen>
          <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
          </Tab.Navigator>
          </NavigationContainer>
    )
}