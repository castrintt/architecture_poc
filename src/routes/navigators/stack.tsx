import {Stack} from "@router/appNavigation.config";
import Login from "@pages/public/login/login";
import Home from "@pages/private/home/home";
import React from "react";


export function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={Home}/>

        </Stack.Navigator>
    )
}