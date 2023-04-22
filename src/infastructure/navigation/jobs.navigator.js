import React from "react";

import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";

import {JobsScreen} from "../../features/jobs/screens/jobs.screen";
import {JobDetailScreen} from "../../features/jobs/screens/job-detail.screen";

const JobStack = createStackNavigator();

export const JobsNavigator = () => {
    return (
        <JobStack.Navigator headerMode="none"
                            screenOptions={{...TransitionPresets.ModalPresentationIOS}}>

            <JobStack.Screen name="Jobs" component={JobsScreen}/>
            <JobStack.Screen name="JobDetail" component={JobDetailScreen}/>

        </JobStack.Navigator>
    );
};

