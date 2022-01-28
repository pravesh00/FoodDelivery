import React from "react";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import {RestrauntScreen} from "../../features/restraunts/screen/restraunt.screen";
import { RestarauntDetailsScreen } from "../../features/restraunts/screen/restaraunt-detail.screen";

const RestarauntStack =createStackNavigator();

export const RestarauntNavigator=()=>{
    return (
        <RestarauntStack.Navigator screenOptions={{headerShown:false,
            ...TransitionPresets.ModalPresentationIOS
        }}>
            <RestarauntStack.Screen name="Restaraunts" component={RestrauntScreen}></RestarauntStack.Screen>
            <RestarauntStack.Screen name="RestarauntDetails" component={RestarauntDetailsScreen}></RestarauntStack.Screen>
        </RestarauntStack.Navigator>
    );
};