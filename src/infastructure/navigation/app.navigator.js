import React, {useContext} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import {Text, Button} from "react-native";

import {SafeArea} from "../../components/utility/safe-area.component";

import {MapScreen} from "../../features/map/map.screen";
import {AuthenticationContext} from "../../services/authentication/authentication.context";
import {JobsNavigator} from "./jobs.navigator";
import {JobsContextProvider} from "../../services/jobs/jobs.context";
import {LocationContextProvider} from "../../services/location/location.context";
import {FavouritesContextProvider} from "../../services/favourites/favourites.context";
import {SettingsNavigator} from "./settings.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Menu: "md-information-circle",
    Tracking: "md-map",
    Settings: "md-settings",
};

const createScreenOptions = ({route}) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({size, color}) => (
            <Ionicons name={iconName} size={size} color={color}/>
        ),
    };
};

export const AppNavigator = () => (
    <FavouritesContextProvider>
        <LocationContextProvider>
            <JobsContextProvider>
                <Tab.Navigator
                    screenOptions={createScreenOptions}
                    tabBarOptions={{
                        activeTintColor: "#F9BD00",
                        inactiveTintColor: "black",
                    }}
                >
                    <Tab.Screen name="Menu" component={JobsNavigator}/>
                    <Tab.Screen name="Tracking" component={MapScreen}/>
                    <Tab.Screen name="Settings" component={SettingsNavigator}/>
                </Tab.Navigator>
            </JobsContextProvider>
        </LocationContextProvider>
    </FavouritesContextProvider>
);
