import React, { useContext } from 'react';
import {RestrauntInfo} from "../component/restraunt-info.component";
import { RestrauntInfoContainer,RestaruntList,LoadingContainer } from './restraunt.screen.styles';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestarauntContext } from '../../../services/restaurants/restaurant.context';
import { Colors } from 'react-native-paper';
import { Loading } from '../../../components/utility/loading.component';
import { Search } from '../component/search.component';

export const RestrauntScreen = () =>{
  const {restaraunts,isLoading,error}=useContext(RestarauntContext);
  return(
    <SafeArea>
        {
          isLoading && (
            <LoadingContainer>
              <Loading size={50} animating={true} color={Colors.blue300}></Loading>
            </LoadingContainer>
          )
        }
        <Search/>
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

