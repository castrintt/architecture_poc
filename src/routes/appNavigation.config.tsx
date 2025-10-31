import React from "react";
import {createDrawerNavigator, DrawerNavigationOptions} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";
import {DrawerParamList, RootStackParamList} from "@router/appNavigator.type";
import {View} from "react-native";

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const drawerOptions: DrawerNavigationOptions = {
    header: () => <View>HEADER</View>,
    drawerActiveBackgroundColor: "#7E2D86",
    drawerActiveTintColor: "#fff",
    drawerInactiveTintColor: "#352559",
    drawerHideStatusBarOnOpen: true,
}
export {drawerOptions, Stack, Drawer}