import styled from "styled-components/native";
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

export const Address=styled.Text`
    font-size:${(props)=>props.theme.fontSizes.caption};
    font-family:${(props)=>props.theme.fonts.body};
`;

export const Info=styled.View`
    padding:${(props)=>props.theme.space[3]};
`;

export const RestrauntCard=styled(Card)`
    background-color:white;
    margin-bottom:4px
`;
export const RestrauntCardCover=styled(Card.Cover)`
    padding:${(props)=>props.theme.space[3]};
    background-color:white;
`;

export const Rating=styled.View`
    flex-direction:row;
    padding-top:${(props)=>props.theme.space[2]};
    padding-bottom:${(props)=>props.theme.space[1]};
`;

export const RatingText=styled.Text`
    padding:${(props)=>props.theme.space[0]};
`;

export const Section=styled.View`
    flex-direction:row;
    align-items:center;
`;

export const SectionEnd=styled.View`
    flex:1;
    flex-direction:row;
    justify-content:flex-end;
`;

export const Open=styled(SvgXml)`
    width:20px;
    
`;

export const Icon=styled.Image`
    width:15px;
    height:15px;
`;