import React,{useContext} from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import styled from "styled-components/native";
import {AntDesign} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const FavouritesButton =styled(TouchableOpacity)`
    position:absolute;
    top:25px;
    right:25px;
    z-index:90;

`;

export const Favourite=({restraunt})=>{
    const {favourites,addToFavourites,removeFromFavourites} =useContext(FavouritesContext);
    const isFavourite=favourites.find((r)=> r.placeId===restraunt.placeId);

    return (<FavouritesButton 
                onPress={()=>!isFavourite?addToFavourites(restraunt):removeFromFavourites(restraunt)}
            >
                <AntDesign
                    name={isFavourite?"heart":"hearto"}
                    size={24}
                    color={isFavourite?"red":"white"}
                />
            </FavouritesButton>);
}