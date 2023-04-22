import React, {useContext} from "react";
import styled from "styled-components/native";

import {List, Avatar} from "react-native-paper";

import {Text} from "../../../components/typography/text.component";
import {Spacer} from "../../../components/spacer/spacer.component";
import {SafeArea} from "../../../components/utility/safe-area.component";
import {AuthenticationContext} from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  margin-top: 50px;
  margin-bottom: 50px;
  align-items: center;
`;

export const SettingsScreen = ({navigation}) => {
    const {onLogout, user} = useContext(AuthenticationContext);
    return (
        <SafeArea>
            <AvatarContainer>
                <Avatar.Icon size={180} icon="face" backgroundColor="#F9BD00"/>
                <Spacer position="top" size="large">
                    <Text variant="label">{user.email}</Text>
                </Spacer>
            </AvatarContainer>

            <List.Section>
                <SettingsItem
                    title="Favourites"
                    description="View your favourites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart"/>}
                    onPress={() => navigation.navigate("Favourites")}
                />

                <SettingsItem
                    title="Messages"
                    description="Display a push notification to alert you of an incoming message."
                    left={(props) => <List.Icon {...props} color="black" icon="mail"/>}
                    onPress={() => console.log("Privacy policy")}
                />

                <SettingsItem
                    title="Privacy policy"
                    description="How app collects, handles and processes data of its customers."
                    left={(props) => <List.Icon {...props} color="black" icon="bookmark"/>}
                    onPress={() => console.log("Privacy policy")}
                />


                <SettingsItem
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="door"/>}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>
    );
};
