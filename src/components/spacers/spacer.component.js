import React from 'react';
import {View} from 'react-native';
import { useTheme } from 'styled-components';
import styled from 'styled-components/native';

const sizes={
    small:1,
    medium:2,
    large:3
};

const positions={
    top:'margin-top',
    right:'margin-right',
    left:'margin-left',
    bottom:'margin-bottom'
}
const getVariant=(position,size,theme)=>{
    const sizeIndex=sizes[size];
    const val=theme.space[sizeIndex];
    const property=positions[position];
    return `${property}:${val}`;
};

const SpacerView =styled.View`
    ${({variant})=>variant};
`;

export const Spacer=({position,size,childern})=>{
    const theme=useTheme();
    const variant=getVariant(position,size,theme);
    return <SpacerView variant={variant}>{childern}</SpacerView>;
}
