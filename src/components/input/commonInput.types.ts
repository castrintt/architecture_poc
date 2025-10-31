import {Control, FieldErrors, RegisterOptions} from "react-hook-form";
import {Mask} from "react-native-mask-input";
import {ReactNode} from "react";

export interface CommonInputTypes {
    control: Control<any>;
    name: string;
    label?: string;
    errors: FieldErrors;
    disabled?: boolean;
    placeholder?: string;
    type?: string;
    maxLength?: number;
    mandatory?: boolean;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    iconRightSecondary?: ReactNode;
    onBlur?: () => void;
    mask?: Mask;
    onChange?: (value: any) => void;
    textarea?: boolean;
    checkbox?: boolean;
    checkboxCircle?: boolean;
    rules?: RegisterOptions;
    accessibilityLabel?: string;
}
