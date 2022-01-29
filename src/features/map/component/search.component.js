import { Searchbar } from "react-native-paper";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../../services/location/location.context";
import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const SearchContainer=styled.View`
    padding:${(props)=>props.theme.space[3]};
    z-index:999;
    position:absolute;
    ${StatusBar.currentHeight && `top:${StatusBar.currentHeight}px`};
    width:100%;
`;

export const Search=()=>{
    const {keyword,search} =useContext(LocationContext);
    const [searchKeyword,setSearchKeyword]=useState(keyword);
    
    useEffect(()=>{
        search(searchKeyword);
    },[]);

    return(
        <SearchContainer>
          <Searchbar placeholder='Search'
          icon="map"
          value={searchKeyword}
          onSubmitEditing={()=>{
              search(searchKeyword);
          }}
          onChangeText={(text)=>{
                setSearchKeyword(text);
          }}/>
        </SearchContainer>
    );
}
