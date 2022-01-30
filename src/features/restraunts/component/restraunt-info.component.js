import React from 'react';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacers/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { Favourite } from '../../../components/favourites/favourites.component';
import { 
    Address,
    Info,
    Icon,
    RestrauntCard,
    RestrauntCardCover,
    Rating,
    RatingText,
    Section,
    SectionEnd,
    Open } from './restraunt-info.styles';


export const RestrauntInfo =({restraunt ={}})=>{
    const {
        name='Burger Queen',
        icon= "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos=
            ['https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'],
        address ='3795, Choudhary Gate, Johari Bazaar',
        isOpenNow= true,
        rating=4.5,
        isClosedTemporarily=true,
        placeId

    }=restraunt;
    
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <RestrauntCard elevation={5} >
            <Favourite restraunt={restraunt}/>
            <RestrauntCardCover source={{uri:photos[0]}} key={name} />
            <Info>
            <Text variant="label">{name}</Text>
            <Section>
            <Rating>
            {ratingArray.map((_,i)=>(
            <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20}></SvgXml>
            ))}
            <RatingText>{rating}</RatingText>
            <SectionEnd>
                {isClosedTemporarily && (
                    <Text variant="error">
                        CLOSED TEMPORARILY
                    </Text>
                )}
                <Spacer position="left" size="large"></Spacer>
                {isOpenNow && <Open xml={open} width={25} height={25}></Open>}
                <Spacer position="left" size="large"></Spacer>
                <Icon source={{uri:icon}}></Icon>
            </SectionEnd>
            </Rating>
            </Section>
            <Address>{address}</Address>
            
            </Info>
        </RestrauntCard>
    );
};
