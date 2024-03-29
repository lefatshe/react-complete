import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import {AccountScreen} from "../../features/accounts/screens/account.screen";
import {LoginScreen} from "../../features/accounts/screens/login.screen";
import {RegisterScreen} from "../../features/accounts/screens/register.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Main" component={AccountScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
    </Stack.Navigator>
);
