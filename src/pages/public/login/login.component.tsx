import React from "react";
import {View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Ionicons} from "@expo/vector-icons";
import CommonInput from "@components/input/commonInput";
import Button from "@components/button/Button";
import {LoginControllerType} from "@pages/public/login/login.types";
import {Styles} from "@pages/public/login/login.styles";
import {EButtonStyle} from "@enums/EButtonStyle";


function LoginComponent({controller}: LoginControllerType) {
    return (
        <LinearGradient
            colors={[
                "white",
                "black"
            ]}
            style={Styles.linearGradientComponent}
        >
            <View
                className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg z-10"
                style={Styles.loginForm}
                accessibilityLabel={'login-form'}
            >
                <View className="mb-2">
                    <CommonInput
                        accessibilityLabel='email-input'
                        control={controller.states.control}
                        name="email"
                        label="E-mail"
                        placeholder="email@email.com"
                        type="email"
                        errors={controller.states.errors}
                        iconLeft={
                            <Ionicons name="person-outline" size={20} color="#9CA3AF"/>
                        }
                    />
                </View>

                <View className="mb-2">
                    <CommonInput
                        accessibilityLabel='password-input'
                        control={controller.states.control}
                        name="password"
                        label="Senha"
                        placeholder="Digite"
                        errors={controller.states.errors}
                        type="password"
                        iconLeft={
                            <Ionicons
                                name="lock-closed-outline"
                                size={20}
                                color="#9CA3AF"
                            />
                        }
                    />
                </View>

                <View className="mt-2 mb-3">
                    <Button
                        accessibilityLabel={'submit-button'}
                        description="Entrar"
                        onPress={controller.actions.onSubmit}
                        style={EButtonStyle.PRIMARY}
                    />
                </View>
            </View>
        </LinearGradient>
    )
        ;
}

export default React.memo(LoginComponent);
