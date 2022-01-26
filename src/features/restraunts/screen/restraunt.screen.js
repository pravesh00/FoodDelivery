import React, { useContext } from 'react';
import {Searchbar} from 'react-native-paper';
import {RestrauntInfo} from "../component/restraunt-info.component";
import { SearchContainer,RestrauntInfoContainer,RestaruntList,LoadingContainer } from './restraunt.screen.styles';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestarauntContext } from '../../../services/restaurants/restaurant.context';
import { Colors } from 'react-native-paper';
import { Loading } from '../../../components/utility/loading.component';
import {LocationContext} from '../../../services/location/location.context';

export const RestrauntScreen = () =>{
  const {restaraunts,isLoading,error}=useContext(RestarauntContext);
  const {locations}=useContext(LocationContext);
  return(
    <SafeArea>
        {
          isLoading && (
            <LoadingContainer>
              <Loading size={50} animating={true} color={Colors.blue300}></Loading>
            </LoadingContainer>
          )
        }
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

