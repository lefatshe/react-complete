import React, {
    useState,
    useContext,
    createContext,
    useEffect,
    useMemo,
} from "react";

import {
    jobsRequest,
    jobsTransform,
} from "./jobs.service";

import {LocationContext} from "../location/location.context";

export const JobsContext = createContext();

export const JobsContextProvider = ({children}) => {

    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {location} = useContext(LocationContext);

    const retrieveJobs = (loc) => {

        setIsLoading(true);
        setJobs([]);

        setTimeout(() => {
            jobsRequest(loc)
                .then(jobsTransform)
                .then((results) => {
                    setIsLoading(false);
                    setJobs(results);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setError(err);
                });
        }, 2000);
    };

    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            retrieveJobs(locationString);
        }
    }, [location]);


    return (
        <JobsContext.Provider value={{jobs, isLoading, error}}>
            {children}
        </JobsContext.Provider>
    );
};
