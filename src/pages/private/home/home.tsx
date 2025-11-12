import {lazy, Suspense} from "react";
import UseHomeController from "./home.controller";
import {View} from "react-native";

const HomeComponent = lazy(() => import("./home.component"));

function Home() {

    const controller = UseHomeController();

    return (
        <Suspense fallback={<View>Carregando...</View>}>
            <HomeComponent controller={controller}/>
        </Suspense>
    );
}

export default Home;
