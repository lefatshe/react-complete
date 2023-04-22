// https://callstack.github.io/react-native-paper/list-accordion.html

import React, {useState} from "react";
import {ScrollView} from "react-native";
import {List} from "react-native-paper";

import {SafeArea} from "../../../components/utility/safe-area.component";

import {JobsInfoCardComponents} from "../components/jobs-info-card.components";
import {AuthButton} from "../../accounts/components/account.styles";

export const JobDetailScreen = ({route}) => {

    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    const {job} = route.params;
    return (
        <SafeArea>

            <JobsInfoCardComponents job={job}/>

            <ScrollView>

                <List.Accordion title="THC Level"
                                left={(props) => <List.Icon {...props} icon="hamburger"/>}
                                expanded={lunchExpanded}
                                onPress={() => setLunchExpanded(!lunchExpanded)}>
                    <List.Item title="THC 20% CBG 1%"/>
                </List.Accordion>

                <List.Accordion title="Strain Effects"
                                left={(props) => <List.Icon {...props} icon="bread-slice"/>}
                                expanded={breakfastExpanded}
                                onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
                    <List.Item title="Relaxed"/>
                    <List.Item title="Aroused"/>
                    <List.Item title="Hungry"/>
                    <List.Item title="Dizzy"/>
                    <List.Item title="Anxious"/>
                    <List.Item title="Paranoid"/>
                </List.Accordion>

                <List.Accordion title="Helps With"
                                left={(props) => <List.Icon {...props} icon="food-variant"/>}
                                expanded={dinnerExpanded}
                                onPress={() => setDinnerExpanded(!dinnerExpanded)}>
                    <List.Item title="Alzheimer's"/>
                    <List.Item title="Anorexiai"/>
                    <List.Item title="Asthma"/>
                    <List.Item title="Crohn's disease's"/>
                    <List.Item title="Depression"/>
                    <List.Item title="Epilepsy"/>
                </List.Accordion>

                <List.Accordion title="Flavors"
                                left={(props) => <List.Icon {...props} icon="cup"/>}
                                expanded={drinksExpanded}
                                onPress={() => setDrinksExpanded(!drinksExpanded)}>
                    <List.Item title="Ammonia"/>
                    <List.Item title="Apple"/>
                    <List.Item title="Berry"/>
                    <List.Item title="Butter"/>
                    <List.Item title="Chemical"/>
                </List.Accordion>

            </ScrollView>

            <AuthButton
                icon="tag"
                mode="contained"
                onPress={() => console.log("Order This Item.")}>
                Order Item
            </AuthButton>

        </SafeArea>
    );
};
