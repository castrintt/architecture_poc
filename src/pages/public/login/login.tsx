import UseLoginController from "./login.controller";
import {lazy, Suspense} from "react";
import {useIoCContainer} from "@hooks/ioCContainer.context";
import {View} from "react-native";

const LoginComponent = lazy(() => import("./login.component"));

function Login() {
    const container = useIoCContainer()
    const authService = container.getAuthService()
    const controller = UseLoginController({authService});

    return (
        <Suspense fallback={<View>Carregando..</View>}>
            <LoginComponent controller={controller}/>
        </Suspense>
    );
}

export default Login;
