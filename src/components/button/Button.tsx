import {Text, TouchableOpacity, View} from "react-native";
import type {ButtonTypes} from "./button.types";
import {EButtonCommonStyle} from "../../../@domain/enum/buttonStyle.enum";
import {useFocusEffect} from "@react-navigation/core";
import {memo, useCallback, useState} from "react";

const Button = ({
    onPress,
    description,
    maxWidth,
    maxHeight,
    style = EButtonCommonStyle.PRIMARY,
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
            [EButtonCommonStyle.PRIMARY]: "color-black text-lg text-base",
            [EButtonCommonStyle.SECONDARY]: "color-white text-neutral-100 ",
            [EButtonCommonStyle.TRANSPARENT]: "color-black text-primary-500",
        };
        const joinedString = existingTextStyleOptions[style];
        setDefaultTextStyles((prev) =>
            joinedString ? joinedString.concat(` ${prev}`) : prev
        );
    }

    function executeActionToJoinButtonStyles() {
        const existingButtonStyleOptions = {
            [EButtonCommonStyle.PRIMARY]:
                "bg-[blue] rounded border-0 h-10 px-3 py-3",
            [EButtonCommonStyle.SECONDARY]:
                "bg-[purple] rounded-md border-0 h-10 px-3",
            [EButtonCommonStyle.TRANSPARENT]:
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
