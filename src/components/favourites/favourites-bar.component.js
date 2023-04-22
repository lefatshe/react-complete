import React from "react";
import {ScrollView, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import {Spacer} from "../spacer/spacer.component";
import {Text} from "../typography/text.component";
import {FullJobInfo} from "../job/full-job-info.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({favourites, onNavigate}) => {
    if (!favourites.length) {
        return null;
    }
    return (
        <FavouritesWrapper>
            <Spacer variant="left.large">
                <Text variant="caption">Favourites</Text>
            </Spacer>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map((job) => {
                    const key = job.name;
                    return (
                        <Spacer key={key} position="left" size="medium">
                            <TouchableOpacity
                                onPress={() =>
                                    onNavigate("JobDetail", {
                                        job,
                                    })
                                }>
                                <FullJobInfo job={job}/>
                            </TouchableOpacity>
                        </Spacer>
                    );
                })}
            </ScrollView>
        </FavouritesWrapper>
    );
};
