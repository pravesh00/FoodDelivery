import { SearchContainer } from "../screen/restraunt.screen.styles";
import { Searchbar } from "react-native-paper";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../../services/location/location.context";

export const Search=({isFavouriteToggled,onFavouriteToggled})=>{
    const {keyword,search} =useContext(LocationContext);
    const [searchKeyword,setSearchKeyword]=useState(keyword);
    
    useEffect(()=>{
        search(searchKeyword);
    },[]);

    return(
        <SearchContainer>
          <Searchbar placeholder='Search'
          icon={isFavouriteToggled?"heart":"heart-outline"}
          onIconPress={onFavouriteToggled}
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
