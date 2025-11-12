import UseLoginController from "./login.controller";
import {lazy, Suspense} from "react";
import {View} from "react-native";
import {useInjection} from "@hooks/useInjection";
import type {IUserService} from "@application/contracts/user.interface";
import {SERVICES_BIND_SYMBOL} from "@core/IoC/binds/service.bind";

const LoginComponent = lazy(() => import("./login.component"));

function Login() {
    const userService = useInjection<IUserService>(SERVICES_BIND_SYMBOL.UserService)
    const controller = UseLoginController({userService});

    return (
        <Suspense fallback={<View>Carregando..</View>}>
            <LoginComponent controller={controller}/>
        </Suspense>
    );
}

export default Login;
