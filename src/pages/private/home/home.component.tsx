import React from "react";
import {ControllerType} from "./home.types";
import {Text, View} from "react-native";
import Button from "@components/button/Button";
import {EButtonStyle} from "@domain/enum/EButtonStyle.enum";

function HomeComponent({controller}: ControllerType) {
    return (
        <View className="flex-1 px-4 bg-[#F5F5F5]">
            <Text>Home</Text>
            <Button
                style={EButtonStyle.SECONDARY}
                description='logout'
                onPress={controller.actions.logout}
            />
        </View>
    );
}

export default React.memo(HomeComponent);
