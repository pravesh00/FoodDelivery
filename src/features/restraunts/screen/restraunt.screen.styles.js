import { FlatList } from 'react-native';
import styled from "styled-components/native";

export const SearchContainer=styled.View`
    padding:${(props)=>props.theme.space[3]};
`;

export const RestrauntInfoContainer=styled.View`
    flex:1;
    padding:${(props)=>props.theme.space[3]};
`;

export const RestaruntList=styled(FlatList).attrs({
  contentContainerStyle:{
    padding:4,
  }
})`

`;