import React from "react";

import {Spacer} from "../../../components/spacer/spacer.component";
import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AuthButton,
    Title,
    MainTitle,
    AnimationWrapper,
} from "../components/account.styles";
import LottieView from "lottie-react-native";

export const AccountScreen = ({navigation}) => {
    return (
        <AccountBackground>
            <AccountCover/>
            <AnimationWrapper>
                <LottieView
                    key="animation"
                    autoPlay
                    loop
                    resizeMode="cover"
                    source={require("../../../../assets/animations/lottie.json")}
                />
            </AnimationWrapper>
            <MainTitle>El~`Greeno</MainTitle>
            <Title>THE BUD-DY YOU CAN ALWAYS TRUST.</Title>
            <AccountContainer>
                <AuthButton
                    icon="email"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}
                >
                    Login
                </AuthButton>
                <Spacer size="large">
                    <AuthButton
                        icon="lock-open-outline"
                        mode="contained"
                        onPress={() => navigation.navigate("Register")}
                    >
                        Register
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    );
};
