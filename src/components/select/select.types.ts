import type {Control, FieldErrors} from "react-hook-form";

export type SelectOption<T> = {
    label: string;
    value: T;
};

export type CommonSelectTypes<T> = {
    control: Control<any>;
    name: string;
    label?: string;
    errors?: FieldErrors;
    disabled?: boolean;
    placeholder?: string;
    mandatory?: boolean;
    multiple?: boolean;
    options: SelectOption<T>[];
};