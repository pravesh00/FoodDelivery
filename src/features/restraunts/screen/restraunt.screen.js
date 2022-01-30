import React, { useContext , useState } from 'react';
import {RestrauntInfo} from "../component/restraunt-info.component";
import { RestrauntInfoContainer,RestaruntList,LoadingContainer } from './restraunt.screen.styles';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestarauntContext } from '../../../services/restaurants/restaurant.context';
import { Colors } from 'react-native-paper';
import { Loading } from '../../../components/utility/loading.component';
import { Search } from '../component/search.component';
import { TouchableOpacity } from 'react-native';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

export const RestrauntScreen = ({navigation}) =>{
  const {restaraunts,isLoading,error}=useContext(RestarauntContext);
  const [isFavouriteToggled,setIsFavouriteToggled]=useState(false);
  const {favourites}=useContext(FavouritesContext);

  return(
    <SafeArea>
        {
          isLoading && (
            <LoadingContainer>
              <Loading size={50} animating={true} color={Colors.blue300}></Loading>
            </LoadingContainer>
          )
        }
        <Search isFavouriteToggled={isFavouriteToggled} onFavouriteToggled={()=>setIsFavouriteToggled(!isFavouriteToggled)}/>
        {isFavouriteToggled && <FavouritesBar favourites={favourites} navigation={navigation}/>}
        <RestrauntInfoContainer>
          <RestaruntList
            data={restaraunts}
            renderItem={({item})=>(
            <TouchableOpacity onPress={()=>{navigation.navigate("RestarauntDetails",{
              data: item
              });}}>
            <RestrauntInfo restraunt={item}/>
            </TouchableOpacity>
            )
            }
            keyExtractor={(item)=>item.name}
            showsVerticalScrollIndicator={false}
          />
        </RestrauntInfoContainer>
      </SafeArea>
)};

