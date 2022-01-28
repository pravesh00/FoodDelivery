import { SearchContainer } from "../screen/restraunt.screen.styles";
import { Searchbar } from "react-native-paper";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../../services/location/location.context";

export const Search=()=>{
    const {keyword,search} =useContext(LocationContext);
    const [searchKeyword,setSearchKeyword]=useState(keyword);
    
    useEffect(()=>{
        search(searchKeyword);
    },[]);

    return(
        <SearchContainer>
          <Searchbar placeholder='Search'
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
