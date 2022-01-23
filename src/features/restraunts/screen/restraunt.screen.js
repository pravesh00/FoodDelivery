import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,StatusBar,Platform } from 'react-native';
import {Searchbar} from 'react-native-paper';
import { RestrauntInfo } from '../component/restraunt-info.component';
import styled from 'styled-components/native';

const SafeArea= styled(SafeAreaView)`
    flex:1;
    ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

const SearchContainer=styled.View`
    padding:${(props)=>props.theme.space[3]};
`;

const RestrauntInfoContainer=styled.View`
    flex:1;
    padding:${(props)=>props.theme.space[3]};
`;
export const RestrauntScreen = () =>(
    <SafeArea>
        <SearchContainer>
          <Searchbar placeholder='Search'></Searchbar>
        </SearchContainer>
        <RestrauntInfoContainer>
          <RestrauntInfo/>
        </RestrauntInfoContainer>
      </SafeArea>
);

