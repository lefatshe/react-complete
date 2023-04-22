import {mocks, mockImages} from "./mock";
import camelize from "camelize";

export const jobsRequest = (location) => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("not found");
        }
        resolve(mock);
    });
};
export const jobsTransform = ({results = []}) => {
    const mappedResults = results.map((job) => {

        job.photos = job.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
        });

        // todo Check API properties match
        return {
            ...job,
            address: job.vicinity,
            isOpenNow: job.opening_hours && job.opening_hours.open_now,
            isClosedTemporarily: job.business_status === "CLOSED_TEMPORARILY",
        };
    });

    return camelize(mappedResults);
};
