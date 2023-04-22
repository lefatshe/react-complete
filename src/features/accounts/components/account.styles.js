import styled from "styled-components/native";
import {Button, TextInput} from "react-native-paper";
import {colors} from "../../../infastructure/theme/colors";
import {Text} from "../../../components/typography/text.component";
import {theme} from "../../../infastructure/theme";

export const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/home_bg.jpg"),
    // source: require("../../../../assets/kwik.gif"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
    color: colors.brand.yellow,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 16px;
`;

export const MainTitle = styled(Text)`
  font-family: ${theme.fonts.monospace};
  font-size: 55px;
  font-weight: ${theme.fontWeights.medium}
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 20px;
  padding: ${(props) => props.theme.space[2]};
`;
