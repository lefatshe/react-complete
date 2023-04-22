import React, {useContext, useEffect, useState} from "react";
import MapView from "react-native-maps";
import {Search} from "./components/search-map.componet";
import styled from "styled-components/native";
import {LocationContext} from "../../services/location/location.context";
import {JobsContext} from "../../services/jobs/jobs.context";
import {MapCallout} from "./components/map-callout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({navigation}) => {

    const {location} = useContext(LocationContext);
    const {jobs = []} = useContext(JobsContext);

    const [latDelta, setLatDelta] = useState(0);

    const {lat, lng, viewport} = location;

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport]);

    return (
        <>
            <Search/>
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}>
                {jobs.map((job) => {
                    return (
                        <MapView.Marker
                            key={job.name}
                            title={job.name}
                            coordinate={{
                                latitude: job.geometry.location.lat,
                                longitude: job.geometry.location.lng,
                            }}>
                            <MapView.Callout
                                onPress={() =>
                                    navigation.navigate("JobDetail", {
                                        job,
                                    })
                                }>
                                <MapCallout job={job}/>
                            </MapView.Callout>
                        </MapView.Marker>
                    );
                })}
            </Map>
        </>
    );
};
