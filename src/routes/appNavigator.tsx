import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {toastConfiguration} from "@components/toast/toast.configuration";
import Toast from "react-native-toast-message";
import {DrawerNavigator} from "@router/navigators/drawer";
import {StackNavigator} from "@router/navigators/stack";
import {SecureStore} from "@libs/storage/imports";
import {STORE_KEYS} from "@utils/STORE_KEYS";
import {EUserAuthStatus} from "@enums/authUser";
import {useDispatch} from "react-redux";
import {useAppSelector} from "@store/store";
import {authUser} from "@store/slices/authSlice/reducer";
import {IoCProvider} from "@hooks/ioCContainer.context";


export default function AppNavigator() {
    const dispatch = useDispatch();
    const {isAuthenticated} = useAppSelector((state) => state.auth);

    async function checkAuth() {
        const isAuth = await SecureStore.GET_ASYNC(STORE_KEYS.TOKEN.AUTHENTICATED) === EUserAuthStatus.AUTHORIZED
        dispatch(authUser(isAuth));
    }

    useEffect(() => {
        checkAuth().then()
    }, [isAuthenticated]);

    return (
        <IoCProvider>
            <NavigationContainer
                onStateChange={async () => await checkAuth()}
            >
                {isAuthenticated ? (<DrawerNavigator/>) : (<StackNavigator/>)}
                <Toast config={toastConfiguration}/>
            </NavigationContainer>
        </IoCProvider>
    );
}

