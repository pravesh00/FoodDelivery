import React from "react";
import { ScrollView,View } from "react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CompactRestarauntInfo } from "../restaraunt/compact-restaraunt-info.component";

const FavouriteWrapper=styled.View`
    padding:10px;
`;

export const FavouritesBar=({favourites,navigation})=>{
    return (
            <FavouriteWrapper>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {favourites.map((res)=>{
                        const key=res.name.split("").join("");
                        return(
                        <TouchableOpacity key={key} style={{marginRight:10}} onPress={()=>navigation.navigate("RestarauntDetails",
                                                                                                                    {data:res})}>
                            <CompactRestarauntInfo restarauant={res}/>
                        </TouchableOpacity>);
                    })}

                </ScrollView>
            </FavouriteWrapper>
        )
}