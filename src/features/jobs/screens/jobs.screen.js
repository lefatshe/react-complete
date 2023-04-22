import React, {useContext, useState} from "react";
import {FlatList, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import {ActivityIndicator, Colors} from "react-native-paper";

import {SafeArea} from "../../../components/utility/safe-area.component";
import {Spacer} from "../../../components/spacer/spacer.component";

import {JobsContext} from "../../../services/jobs/jobs.context";
import {FavouritesContext} from "../../../services/favourites/favourites.context";

// Components
import {Search} from "../components/search.component";
import {JobsInfoCardComponents} from "../components/jobs-info-card.components";
import {FavouritesBar} from "../../../components/favourites/favourites-bar.component";


import {JobsList} from "../components/jobs-list.styles";
import {FadeInView} from "../../../components/animations/fade.animation";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const JobsScreen = ({navigation}) => {

    const {isLoading, jobs} = useContext(JobsContext);
    const {favourites} = useContext(FavouritesContext);
    const [isToggled, setIsToggled] = useState(true);

    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true} color={Colors.blue300}/>
                </LoadingContainer>
            )}
            <Search
                isFavouritesToggled={isToggled}
                onFavouritesToggle={() => setIsToggled(!isToggled)}
            />
            {isToggled && (
                <FavouritesBar
                    favourites={favourites}
                    onNavigate={navigation.navigate}
                />
            )}
            <JobsList
                data={jobs}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("JobDetail", {
                                    job: item,
                                })
                            }
                        >
                            <Spacer position="bottom" size="large">

                                <FadeInView>
                                    <JobsInfoCardComponents job={item}/>
                                </FadeInView>

                            </Spacer>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    );
};
