import React from "react";
import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import {ThemeProvider} from "styled-components/native";
import * as firebase from "firebase";

import {
    useFonts as useOswald,
    Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {useFonts as useLato, Lato_400Regular} from "@expo-google-fonts/lato";

const firebaseConfig = {
    apiKey: "AIzaSyAVQ7PqOLZl4HNG2oXKmec0Yp6SWMtS9t4",
    authDomain: "kwiktogo-35a85.firebaseapp.com",
    projectId: "kwiktogo-35a85",
    storageBucket: "kwiktogo-35a85.appspot.com",
    messagingSenderId: "28756646943",
    appId: "1:28756646943:web:b283b46d5ff494116d092a",
};

import {theme} from "./src/infastructure/theme";
import {Navigation} from "./src/infastructure/navigation";
import {AuthenticationContextProvider} from "./src/services/authentication/authentication.context";

// Init firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default function App() {
    const [oswaldLoaded] = useOswald({Oswald_400Regular});
    const [latoLoaded] = useLato({Lato_400Regular});
    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <AuthenticationContextProvider>
                    <Navigation/>
                </AuthenticationContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto"/>
        </>
    );
}
