import {useForm} from "react-hook-form";
import {LoginControllerInjectTypes} from "@pages/public/login/login.types";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginFormData, loginResolver} from "@pages/public/login/login.resolver";
import store from "@store/store";
import {login} from "@store/slices/user/reducer";


function UseLoginController({userService}: LoginControllerInjectTypes) {
    const {
        control,
        handleSubmit,
        formState
    } = useForm<LoginFormData>({
        mode: "onChange",
        resolver: zodResolver(loginResolver),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = handleSubmit(async (_: LoginFormData) => {
        if (userService) store.dispatch(login())
    });


    return {
        actions: {
            onSubmit,
        },
        states: {
            control,
            isValid: formState.isValid,
            errors: formState.errors,
        },
    };
}

export default UseLoginController;
