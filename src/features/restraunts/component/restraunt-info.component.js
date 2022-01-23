import React from 'react';
import { Text,StyleSheet,Image } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacers/spacer.component';

const Address=styled.Text`
    font-size:${(props)=>props.theme.fontSizes.caption};
    font-family:${(props)=>props.theme.fonts.body};
`;

const Info=styled.View`
    padding:${(props)=>props.theme.space[3]};
`;

const Title=styled.Text`
    font-size:${(props)=>props.theme.fontSizes.body};
    font-family:${(props)=>props.theme.fonts.heading};
    color:${(props)=>props.theme.colors.ui.primary};
`;
const RestrauntCard=styled(Card)`
    background-color:white;
`;
const RestrauntCardCover=styled(Card.Cover)`
    padding:${(props)=>props.theme.space[3]};
    background-color:white;
`;

const Rating=styled.View`
    flex-direction:row;
    padding-top:${(props)=>props.theme.space[2]};
    padding-bottom:${(props)=>props.theme.space[1]};
`;

const RatingText=styled.Text`
    padding:${(props)=>props.theme.space[0]};
`;

const Section=styled.View`
    flex-direction:row;
    align-items:center;
`;

const SectionEnd=styled.View`
    flex:1;
    flex-direction:row;
    justify-content:flex-end;
`;

const Open=styled(SvgXml)`
    width:20px
`;

export const RestrauntInfo =({restraunt ={}})=>{
    const {
        name='Burger Queen',
        icon= "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos=
            ['https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'],
        address ='3795, Choudhary Gate, Johari Bazaar',
        isOpenNow= true,
        rating=4.5,
        isClosedTemporarily=true

    }=restraunt;
    
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <RestrauntCard elevation={5} >
            <RestrauntCardCover source={{uri:photos[0]}} key={name} />
            <Info>
            <Title>{name}</Title>
            <Section>
            <Rating>
            {ratingArray.map(()=>(
            <SvgXml xml={star} width={20} height={20}></SvgXml>
            ))}
            <RatingText>{rating}</RatingText>
            <SectionEnd>
                {isClosedTemporarily && (
                    <Text variant="label" style={{color:"red", fontSize:12,marginLeft:4,marginRight:4}}>
                        CLOSED TEMPORARILY
                    </Text>
                )}
                <Spacer position="left" size="large"></Spacer>
                {isOpenNow && <Open xml={open} width={25} height={25}></Open>}
                <Spacer position="left" size="large"></Spacer>
                <Image source={{uri:icon}} style={{width:15, height:15}}></Image>
            </SectionEnd>
            </Rating>
            </Section>
            <Address>{address}</Address>
            </Info>
        </RestrauntCard>
    )
};
