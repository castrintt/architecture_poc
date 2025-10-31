import React, {useState} from "react";
import {Controller} from "react-hook-form";
import {FlatList, Modal, Text, TouchableOpacity, View} from "react-native";
import {CommonSelectTypes} from "@components/select/select.types";
import ArrowDownSvg from "@assets/svg/arrowDown";
import {CheckSvg} from "@assets/svg/check";

const CommonSelect = <T, >({
    control,
    name,
    label,
    errors,
    disabled,
    placeholder = "Selecione uma opção",
    mandatory,
    options = [],
    multiple = false,
}: CommonSelectTypes<T>) => {
    const [showOptions, setShowOptions] = useState(false);

    function handleErrorName() {
        const [object, property] = name.split(".");
        if (!!property) return (errors as any)[object]?.[property];
        return (errors as any)[object];
    }

    function getSelectedLabel(value: T | T[]) {
        if (multiple && Array.isArray(value)) {
            if (value.length === 0) return "";
            if (value.length === 1) {
                const selected = options.find(option => option.value === value[0]);
                return selected?.label || "";
            }
            return `${value.length} selecionados`;
        }
        const selected = options.find(option => option.value === value);
        return selected?.label || "";
    }

    function isSelected(itemValue: T, currentValue: T | T[]): boolean {
        if (multiple && Array.isArray(currentValue)) {
            return currentValue.includes(itemValue);
        }
        return currentValue === itemValue;
    }

    function handleSelect(itemValue: T, currentValue: T | T[], onChange: (value: any) => void) {
        if (multiple) {
            const valueArray = Array.isArray(currentValue) ? currentValue : [];

            if (valueArray.includes(itemValue)) {
                onChange(valueArray.filter(v => v !== itemValue));
            } else {
                onChange([
                    ...valueArray,
                    itemValue
                ]);
            }
        } else {
            onChange(itemValue);
            setShowOptions(false);
        }
    }

    function validateIfCanShowItems() {
        return !disabled && options.length > 0;
    }

    function validateIfIsDisabled() {
        return disabled || options.length === 0;
    }

    return (
        <View className="w-full mb-4">
            {!!label && (
                <Text className="text-sm font-medium text-gray-700 mb-1.5">
                    {label}
                    <Text className="text-red-500">{mandatory ? "*" : ""}</Text>
                </Text>
            )}
            <Controller
                name={name}
                control={control}
                render={({field: {onChange, value}}) => (
                    <>
                        <TouchableOpacity
                            onPress={() => validateIfCanShowItems() && setShowOptions(true)}
                            disabled={validateIfIsDisabled()}
                            className={`w-full h-11 border rounded-md py-2.5 px-3 justify-center ${
                                handleErrorName() ? 'border-red-500' : 'border-gray-300'
                            } ${validateIfIsDisabled() ? 'bg-gray-100' : 'bg-white'}`}
                        >
                            <Text className={`text-base ${value ? 'text-gray-900' : 'text-gray-400'}`}>
                                {value ? getSelectedLabel(value) : placeholder}
                            </Text>
                        </TouchableOpacity>

                        <Modal
                            visible={showOptions}
                            transparent
                            animationType="fade"
                            onRequestClose={() => setShowOptions(false)}
                        >
                            <TouchableOpacity
                                className="flex-1 bg-black/50 justify-center items-center"
                                activeOpacity={1}
                                onPress={() => setShowOptions(false)}
                            >
                                <View
                                    className="w-11/12 max-h-96 bg-white rounded-lg shadow-lg overflow-hidden"
                                    onStartShouldSetResponder={() => true}
                                >
                                    <FlatList
                                        data={options}
                                        keyExtractor={(item, index) => `${item.value}-${index}`}
                                        renderItem={({item}) => {
                                            const selected = isSelected(item.value, value);

                                            return (
                                                <TouchableOpacity
                                                    className={`p-4 border-b border-gray-100 flex-row items-center  ${multiple ? 'justify-between' : 'justify-center'} ${
                                                        selected ? 'bg-purple-50' : 'bg-white'
                                                    }`}
                                                    onPress={() => handleSelect(item.value, value, onChange)}
                                                >
                                                    <Text
                                                        className={`text-base ${multiple ? 'flex-1' : 'text-center'} ${
                                                            selected
                                                                ? 'text-purple-700 font-semibold'
                                                                : 'text-gray-900'
                                                        }`}
                                                    >
                                                        {item.label}
                                                    </Text>

                                                    {multiple && selected && (
                                                        <CheckSvg/>
                                                    )}
                                                </TouchableOpacity>
                                            );
                                        }}
                                    />
                                    {multiple && (
                                        <View className="p-3 border-t border-gray-200 bg-gray-50">
                                            <TouchableOpacity
                                                className="bg-purple-600 py-2 px-4 rounded-md"
                                                onPress={() => setShowOptions(false)}
                                            >
                                                <Text className="text-white text-center font-semibold">
                                                    Confirmar Seleção
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                </View>
                            </TouchableOpacity>
                        </Modal>

                        {handleErrorName() && (
                            <Text className="w-full text-xs text-red-500 mt-1">
                                {handleErrorName().message}
                            </Text>
                        )}
                    </>
                )}
            />
            <View className="absolute right-4 top-11">
                <ArrowDownSvg/>
            </View>
        </View>
    );
};

export default CommonSelect;