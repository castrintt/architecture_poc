import {useForm} from "react-hook-form";
import {LoginControllerInjectTypes} from "@pages/public/login/login.types";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginFormData, loginResolver} from "@pages/public/login/login.resolver";


function UseLoginController({authService}: LoginControllerInjectTypes) {
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

    const onSubmit = handleSubmit(async (data: LoginFormData) => {
        await authService.generateTokenAsync(data.email, data.password)
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
