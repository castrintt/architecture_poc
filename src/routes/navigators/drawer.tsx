import {Drawer, drawerOptions} from "@router/appNavigation.config";
import Home from "@pages/private/home/home";
import React from "react";
import {Text, View} from "react-native";

export function DrawerNavigator() {

    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={drawerOptions}
            drawerContent={(props) => (
                <View>
                    <Text>{props.state.default}</Text>
                </View>
            )}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
            />
        </Drawer.Navigator>
    );
}