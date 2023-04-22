import React from "react";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {Spacer} from "../../../components/spacer/spacer.component";

import {SvgXml} from "react-native-svg";
import {Text} from "../../../components/typography/text.component";

import {
    Address,
    Icon,
    Info,
    JobCard,
    JobCardCover,
    Rating,
    Section,
    SectionEnd,
} from "./jobs-info-card.styles";
import {Favourite} from "../../../components/favourites/favourite.component";

export const JobsInfoCardComponents = ({job = {}}) => {
    const {
        name = "React-Native.",
        icon = "data:image/png;base64,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",
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 Grayston drive, Sandton",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId,
    } = job;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <JobCard elevation={5}>
            <Favourite job={job}/>
            <JobCardCover key={name} source={{uri: photos[0]}}/>
            <Info>

                <Text variant="label">{name}</Text>

                <Section>

                    <Rating>
                        {ratingArray.map((_, i) => (
                            <SvgXml
                                key={`star-${placeId}-${i}`}
                                xml={star}
                                width={20}
                                height={20}
                            />
                        ))}
                    </Rating>

                    <SectionEnd>

                        {isClosedTemporarily && (
                            <Text variant="error">CLOSED TEMPORARILY</Text>
                        )}

                        <Spacer position="left" size="large">
                            {/*{isOpenNow && <SvgXml xml={open} width={20} height={20}/>}*/}
                            <Text>R8/gram</Text>
                        </Spacer>

                        <Spacer position="left" size="large">
                            <Icon source={{uri: icon}}/>
                        </Spacer>

                    </SectionEnd>

                </Section>

                <Address>{address}</Address>
            </Info>
        </JobCard>
    );
};
