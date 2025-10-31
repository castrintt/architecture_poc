import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {toastConfiguration} from "@components/toast/toast.configuration";
import Toast from "react-native-toast-message";
import {DrawerNavigator} from "@router/navigators/drawer";
import {StackNavigator} from "@router/navigators/stack";
import {useAppSelector} from "@store/store";
import {IoCProvider} from "@hooks/ioCContainer.context";


export default function AppNavigator() {
    const {isAuthenticated} = useAppSelector((state) => state.auth);


    return (
        <IoCProvider>
            <NavigationContainer>
                {isAuthenticated ? (<DrawerNavigator/>) : (<StackNavigator/>)}
                <Toast config={toastConfiguration}/>
            </NavigationContainer>
        </IoCProvider>
    );
}

