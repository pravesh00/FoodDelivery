import {NavigationContainer} from "@react-navigation/native";
import { RestrauntScreen} from "../../features/restraunts/screen/restraunt.screen";
import {Ionicons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from "../../components/typography/text.component";
import { SafeArea } from "../../components/utility/safe-area.component";
import{Settings} from "../../features/restraunts/screen/settings.screen";
import{Map} from "../../features/restraunts/screen/map.screen";
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