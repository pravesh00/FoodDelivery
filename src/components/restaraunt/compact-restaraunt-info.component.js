import React from "react";
import styled from "styled-components/native";
import {Text} from "../../components/typography/text.component";
import WebView from "react-native-webview";
import { Platform } from "react-native";

const CompactImage =styled.Image`
    width:120px;
    height:100px;
    border-radius:10px;
`;

const CompactWebView =styled(WebView)`
    width:120px;
    height:100px;
    border-radius:10px;
`;

const Item =styled.View`
    padding:10px;
    max-width:120px;
    align-items:center;
`;

const isAndroid = Platform.OS==="android";

export const CompactRestarauntInfo=({restarauant})=>{
    const Image=isAndroid?CompactWebView:CompactImage;
    return (
        <Item>
            <Image source={{uri:restarauant.photos[0]}} />
            <Text variant="caption" center numberOfLines={3}>{restarauant.name}</Text>
        </Item>
    );

}