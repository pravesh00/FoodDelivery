import React from "react";
import styled from "styled-components/native";

const defaultTypeStyles =(theme)=>`
    font-family:${theme.fonts.body};
    font-weight:${theme.fontWeights.regular};
    color:${theme.colors.text.primary};
    flex-wrap:wrap;
    margin-top:0px;
    margin-bottom:0px;
`;

const body= (theme)=>`
    font-size:${theme.fontSizes.body};
`;

const hint= (theme)=>`
    font-size:${theme.fontSizes.body};
`;

const error=(theme)=>`
    color:${theme.colors.text.error};
`;

const label=(theme)=>`
    font-family:${theme.fonts.heading};
    font-size:${theme.fontSizes.body};
    font-weight:${theme.fontWeights.medium};

`;

const caption=(theme)=>`
    font-size:${theme.fontSizes.caption};
    font-weight:${theme.fontWeights.bold};
`;

const variants={
    body,
    hint,
    error,
    label,
    caption

};
export const Text=styled.Text`
    ${({theme})=>defaultTypeStyles(theme)};
    ${({variant,theme})=>variants[variant](theme)};

`;

Text.defaultProps={
    variant:"body",
};