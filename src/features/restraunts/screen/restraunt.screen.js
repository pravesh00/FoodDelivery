import React, { useContext } from 'react';
import {Searchbar} from 'react-native-paper';
import {RestrauntInfo} from "../component/restraunt-info.component";
import { SearchContainer,RestrauntInfoContainer,RestaruntList } from './restraunt.screen.styles';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestarauntContext } from '../../../services/restaurants/restaurant.context';


export const RestrauntScreen = () =>{
  const {restaraunts,isLoading,error}=useContext(RestarauntContext);
  return(
    <SafeArea>
        <SearchContainer>
          <Searchbar placeholder='Search'></Searchbar>
        </SearchContainer>
        <RestrauntInfoContainer>
          <RestaruntList
            data={restaraunts}
            renderItem={({item})=><RestrauntInfo restraunt={item}/>
            }
            keyExtractor={(item)=>item.name}
            showsVerticalScrollIndicator={false}
          />
        </RestrauntInfoContainer>
      </SafeArea>
)};

