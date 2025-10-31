import type {ReactNode} from "react";
import type {DimensionValue} from "react-native";
import {EButtonStyle} from "@enums/EButtonStyle";

export interface ButtonTypes {
    onPress?: () => void;
    description?: string;
    maxWidth?: DimensionValue;
    maxHeight?: DimensionValue;
    style?: EButtonStyle;
    icon?: ReactNode;
    disabled?: boolean;
    accessibilityLabel?: string;
}
