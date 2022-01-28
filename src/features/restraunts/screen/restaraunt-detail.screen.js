import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { List } from "react-native-paper";
import {SafeArea} from "../../../components/utility/safe-area.component";
import {RestrauntInfo} from "../../../features/restraunts/component/restraunt-info.component";

export const RestarauntDetailsScreen=({route})=>{
    const {data}=route.params;
    const [breakfastExpanded,setBreakfastExpanded]=useState(false);
    const [lunchExpanded,setLunchExpanded]=useState(false);
    const [dinnerExpanded,setDinnerExpanded]=useState(false);
    const [drinkExpanded,setDrinkExpanded]=useState(false);

    return (
        <SafeArea style={{marginTop:0}}>
           <RestrauntInfo restraunt={data}/>
           <ScrollView>
           <List.Accordion
            title="Breakfast"
            left={(props)=><List.Icon {...props} icon="bread-slice"></List.Icon>}
            expanded={breakfastExpanded}
            onPress={()=>setBreakfastExpanded(!breakfastExpanded)}
           >
                <List.Item title="Eggs Benedict" />
                <List.Item title="Classic Breakfast" />
           </List.Accordion>
           <List.Accordion
            title="Lunch"
            left={(props)=><List.Icon {...props} icon="hamburger"></List.Icon>}
            expanded={lunchExpanded}
            onPress={()=>setLunchExpanded(!lunchExpanded)}
           >
                <List.Item title="Burger w/ Fries" />
                <List.Item title="Steak Sandwich" />
                <List.Item title="Mushroom Soup" />
           </List.Accordion>
           <List.Accordion
            title="Dinner"
            left={(props)=><List.Icon {...props} icon="food-variant"></List.Icon>}
            expanded={dinnerExpanded}
            onPress={()=>setDinnerExpanded(!dinnerExpanded)}
           >
                <List.Item title="Spaghetti Bolognese" />
                <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
                <List.Item title="Steak Frites" />
           </List.Accordion>
           <List.Accordion
            title="Drinks"
            left={(props)=><List.Icon {...props} icon="cup"></List.Icon>}
            expanded={drinkExpanded}
            onPress={()=>setDrinkExpanded(!drinkExpanded)}
           >
                <List.Item title="Coffee" />
                <List.Item title="Tea" />
                <List.Item title="Modelo" />
                <List.Item title="Coke" />
                <List.Item title="Fanta" />
           </List.Accordion>
           </ScrollView>
        </SafeArea>
    );
};