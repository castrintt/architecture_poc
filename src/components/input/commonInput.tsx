import React, {useMemo, useState} from "react";
import {Controller} from "react-hook-form";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import MaskInput from "react-native-mask-input";
import type {CommonInputTypes} from "./commonInput.types";

const useFieldError = (errors: any, name: string) => {
    return useMemo(() => {
        const [object, property] = name.split(".");
        return property ? errors?.[object]?.[property] : errors?.[object];
    }, [
        errors,
        name
    ]);
};

const FieldLabel = ({label, mandatory}: { label?: string; mandatory?: boolean }) => {
    if (!label) return null;

    return (
        <Text className="text-sm font-medium text-gray-700 mb-1.5">
            {label}
            {mandatory && <Text className="text-red-500">*</Text>}
        </Text>
    );
};

const FieldError = ({
    error,
    accessibilityLabel
}: {
    error?: { message: string };
    accessibilityLabel?: string;
}) => {
    if (!error) return null;

    return (
        <Text
            accessibilityLabel={`error-${accessibilityLabel}`}
            className="w-full text-xs text-red-500 mt-1"
        >
            {error.message}
        </Text>
    );
};

const InputIcons = ({
    iconLeft,
    iconRight,
    iconRightSecondary,
    isPasswordHidden,
    onTogglePassword,
}: {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    iconRightSecondary?: React.ReactNode;
    isPasswordHidden?: boolean;
    onTogglePassword?: () => void;
}) => {
    return (
        <>
            {iconLeft && (
                <View className="absolute left-3 top-2.5 z-10">
                    {iconLeft}
                </View>
            )}

            {iconRightSecondary ? (
                <View className="absolute right-3 top-2.5 z-10">
                    <TouchableOpacity onPress={onTogglePassword}>
                        {isPasswordHidden ? iconRightSecondary : iconRight}
                    </TouchableOpacity>
                </View>
            ) : (
                iconRight && (
                    <View className="absolute right-3 top-2.5 z-10">
                        {iconRight}
                    </View>
                )
            )}
        </>
    );
};

const CheckboxInput = ({
    value,
    label,
    mandatory,
    disabled,
    onChange,
    circle = false,
}: {
    value: boolean;
    label?: string;
    mandatory?: boolean;
    disabled?: boolean;
    onChange: (value: boolean) => void;
    circle?: boolean;
}) => {
    const handlePress = () => onChange(!value);

    return (
        <View className="flex-row items-center">
            <TouchableOpacity
                className={`w-4 h-4 border border-gray-400 ${
                    circle ? "rounded-full justify-center items-center" : ""
                } ${!circle && value ? "bg-purple-700" : "bg-transparent"}`}
                onPress={handlePress}
                disabled={disabled}
            >
                {circle && value && (
                    <View className="w-2 h-2 bg-purple-700 rounded-full"/>
                )}
            </TouchableOpacity>

            {label && (
                <Text className="text-sm ml-2 mb-2 font-normal">
                    {label}
                    {mandatory && <Text className="text-red-500">*</Text>}
                </Text>
            )}
        </View>
    );
};

const CommonInput = ({
    control,
    name,
    label,
    errors,
    disabled = false,
    placeholder,
    type,
    maxLength = 200,
    mandatory = false,
    iconLeft,
    iconRight,
    iconRightSecondary,
    onBlur,
    mask,
    onChange: onChangeProps,
    textarea = false,
    checkbox = false,
    checkboxCircle = false,
    rules,
    accessibilityLabel,
}: CommonInputTypes) => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(type === "password");
    const fieldError = useFieldError(errors, name);

    const togglePasswordVisibility = () => setIsPasswordHidden((prev) => !prev);

    const getInputClassName = useMemo(() => {
        const baseClasses = [
            "w-full",
            "border",
            "border-gray-300",
            "rounded-md",
            "py-2.5",
            "px-3",
            "text-base",
            "text-gray-900",
            textarea ? "h-25" : "h-10",
            iconLeft ? "pl-10" : "",
            iconRight || iconRightSecondary ? "pr-10" : "",
            disabled ? "bg-gray-100" : "bg-white",
        ];
        return baseClasses.filter(Boolean).join(" ");
    }, [
        textarea,
        iconLeft,
        iconRight,
        iconRightSecondary,
        disabled
    ]);

    const handleChange = (value: any, onChange: (value: any) => void) => {
        onChange(value);
        onChangeProps?.(value);
    };

    const renderInput = (onChange: (value: any) => void, value: any) => {
        if (checkbox || checkboxCircle) {
            return (
                <CheckboxInput
                    value={value}
                    label={label}
                    mandatory={mandatory}
                    disabled={disabled}
                    onChange={(newValue) => handleChange(newValue, onChange)}
                    circle={checkboxCircle}
                />
            );
        }

        if (mask) {
            return (
                <View className="w-full relative">
                    <InputIcons
                        iconLeft={iconLeft}
                        iconRight={iconRight}
                        iconRightSecondary={iconRightSecondary}
                        isPasswordHidden={isPasswordHidden}
                        onTogglePassword={togglePasswordVisibility}
                    />
                    <MaskInput
                        value={value}
                        accessibilityLabel={`masked-${accessibilityLabel}`}
                        onChangeText={(masked) => handleChange(masked, onChange)}
                        mask={mask}
                        editable={!disabled}
                        placeholder={placeholder}
                        placeholderTextColor="#9CA3AF"
                        onBlur={onBlur}
                        maxLength={maxLength}
                        className={getInputClassName}
                    />
                </View>
            );
        }

        return (
            <View className="w-full relative">
                <InputIcons
                    iconLeft={iconLeft}
                    iconRight={iconRight}
                    iconRightSecondary={iconRightSecondary}
                    isPasswordHidden={isPasswordHidden}
                    onTogglePassword={togglePasswordVisibility}
                />
                <TextInput
                    onChangeText={(text) => handleChange(text, onChange)}
                    accessibilityLabel={accessibilityLabel}
                    value={value}
                    editable={!disabled}
                    secureTextEntry={isPasswordHidden}
                    placeholder={placeholder}
                    placeholderTextColor="#9CA3AF"
                    onBlur={onBlur}
                    maxLength={maxLength}
                    multiline={textarea}
                    numberOfLines={textarea ? 4 : 1}
                    className={getInputClassName}
                    style={{textAlignVertical: textarea ? "top" : "center"}}
                />
            </View>
        );
    };

    return (
        <View className="w-full mb-4">
            {!checkbox && !checkboxCircle && (
                <FieldLabel label={label} mandatory={mandatory}/>
            )}

            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({field: {onChange, value}}) => (
                    <>
                        {renderInput(onChange, value)}
                        <FieldError error={fieldError} accessibilityLabel={accessibilityLabel}/>
                    </>
                )}
            />
        </View>
    );
};

export default CommonInput;