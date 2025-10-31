import React from "react";
import {ControllerType} from "./home.types";
import {Text, View} from "react-native";

function HomeComponent(_: ControllerType) {
    return (
        <View className="flex-1 px-4 bg-[#F5F5F5]">
            <Text>Home</Text>
        </View>
    );
}

export default React.memo(HomeComponent);
