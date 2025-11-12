import type {ReactNode} from "react";
import type {DimensionValue} from "react-native";
import type {EButtonStyle} from "@domain/enum/EButtonStyle.enum";

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
