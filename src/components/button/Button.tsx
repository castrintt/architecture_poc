import {Text, TouchableOpacity, View} from "react-native";
import type {ButtonTypes} from "./button.types";

import {useFocusEffect} from "@react-navigation/core";
import {memo, useCallback, useState} from "react";
import {EButtonStyle} from "@enums/EButtonStyle";

const Button = ({
    onPress,
    description,
    maxWidth,
    maxHeight,
    style = EButtonStyle.PRIMARY,
    icon,
    disabled = false,
    accessibilityLabel
}: ButtonTypes) => {
    const [defaultTextStyles, setDefaultTextStyles] = useState<string>(
        "text-sm font-medium text-center "
    );
    const [defaultButtonStyles, setDefaultButtonStyles] = useState<string>(
        "flex items-center justify-center rounded border"
    );

    function executeActionToJoinTextStyles() {
        const existingTextStyleOptions = {
            [EButtonStyle.PRIMARY]: "color-black text-lg text-base",
            [EButtonStyle.SECONDARY]: "color-white text-neutral-100 ",
            [EButtonStyle.TRANSPARENT]: "color-black text-primary-500",
        };
        const joinedString = existingTextStyleOptions[style];
        setDefaultTextStyles((prev) =>
            joinedString ? joinedString.concat(` ${prev}`) : prev
        );
    }

    function executeActionToJoinButtonStyles() {
        const existingButtonStyleOptions = {
            [EButtonStyle.PRIMARY]:
                "bg-[blue] rounded border-0 h-10 px-3 py-3",
            [EButtonStyle.SECONDARY]:
                "bg-[purple] rounded-md border-0 h-10 px-3",
            [EButtonStyle.TRANSPARENT]:
                "bg-transparent rounded-md border-primary-500 h-9",
        };
        const joinedString = existingButtonStyleOptions[style];
        setDefaultButtonStyles((prev) =>
            joinedString ? joinedString.concat(` ${prev}`) : prev
        );
    }

    function commonStyles() {
        executeActionToJoinTextStyles();
        executeActionToJoinButtonStyles();
    }

    useFocusEffect(
        useCallback(() => {
            commonStyles();
        }, [])
    );

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={maxWidth ? {width: maxWidth, height: maxHeight} : undefined}
            className={defaultButtonStyles}
            activeOpacity={0.8}
            accessibilityLabel={accessibilityLabel}
        >
            <View className="flex-row items-center justify-center px-2">
                {icon && <View className="mr-1">{icon}</View>}
                {description && (
                    <Text className={defaultTextStyles} style={{fontFamily: "Roboto"}}>
                        {description}
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default memo(Button);
