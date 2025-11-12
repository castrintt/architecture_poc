import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {toastConfiguration} from "@components/toast/toast.configuration";
import Toast from "react-native-toast-message";
import {DrawerNavigator} from "@router/navigators/drawer";
import {StackNavigator} from "@router/navigators/stack";
import {useAppSelector} from "@store/store";


export default function AppNavigator() {
    const {isAuthenticated} = useAppSelector((state) => state.user);
    return (
        <NavigationContainer>
            {isAuthenticated ? (<DrawerNavigator/>) : (<StackNavigator/>)}
            <Toast config={toastConfiguration}/>
        </NavigationContainer>
    );
}

