import React from 'react';
import {Searchbar} from 'react-native-paper';
import {RestrauntInfo} from "../component/restraunt-info.component";
import { SearchContainer,RestrauntInfoContainer,RestaruntList } from './restraunt.screen.styles';
import { SafeArea } from '../../../components/utility/safe-area.component';

const data=[
  {name:1},
  {name:2},
  {name:3},
  {name:4},
  {name:5},
  {name:6},
  {name:7}
];

export const RestrauntScreen = () =>(
    <SafeArea>
        <SearchContainer>
          <Searchbar placeholder='Search'></Searchbar>
        </SearchContainer>
        <RestrauntInfoContainer>
          <RestaruntList
            data={data}
            renderItem={()=><RestrauntInfo/>
            }
            keyExtractor={(item)=>item.name}
            showsVerticalScrollIndicator={false}
          />
        </RestrauntInfoContainer>
      </SafeArea>
);

