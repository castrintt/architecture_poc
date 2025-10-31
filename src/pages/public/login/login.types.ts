import {IAuthService} from "@service/auth/auth.interface";
import {BaseSyntheticEvent} from "react";
import {Control, FieldErrors} from "react-hook-form";

type Actions = {
    onSubmit: (e?: BaseSyntheticEvent) => Promise<void>
};

type States = {
    control: Control<{
        email: string
        password: string
    }, any, {
        email: string
        password: string
    }>
    isValid: boolean
    errors: FieldErrors<{
        email: string
        password: string
    }>
};


export type LoginControllerType = {
    controller: {
        actions: Actions;
        states: States;
    };
};

export type LoginControllerInjectTypes = {
    authService: IAuthService;
}
