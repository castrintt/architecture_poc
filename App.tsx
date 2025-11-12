import "reflect-metadata"
import "@core/IoC/IoC.container"
import React, {useEffect, useState} from "react";
import * as SplashScreen from "expo-splash-screen";
import {Provider} from "react-redux";
import store from "@store/store";
import {Text, View} from "react-native";
import AppNavigator from "@router/appNavigator";
import "./global.css";
import {initializeAxiosInterceptors} from '@libs/axios/axios.instances';

export default function App() {
    const [isReady, setIsReady] = useState(false);

    async function prepare() {
        try {
            await SplashScreen.preventAutoHideAsync();
            await initializeAxiosInterceptors();
        } finally {
            setIsReady(true);
            await SplashScreen.hideAsync();
        }
    }

    useEffect(() => {
        prepare().then();
    }, []);

    return (
        <Provider store={store}>
            {!isReady ? (
                <View className="flex-1 bg-[#742A7C] justify-center items-center">
                    <Text>CARREGANDO APP</Text>
                </View>
            ) : (
                <AppNavigator/>
            )}
        </Provider>
    );

}
