import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import {Platform} from "react-native";

import {Text} from "../typography/text.component";

const FullImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const FullWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const FullJobInfo = ({job, isMap}) => {
    const Image = isAndroid && isMap ? FullWebview : FullImage;

    return (
        <Item>
            <Image source={{uri: job.photos[0]}}/>
            <Text center variant="caption" numberOfLines={3}>
                {job.name}
            </Text>
        </Item>
    );
};
