import {AxiosBuilder} from './axios.builder';
import {STORE_KEYS} from "@utils/STORE_KEYS";

export const BASE_URL_APPLICATION = STORE_KEYS.URL.LOCAL


const HTTP_INSTANCES = {
    PRIVATE: AxiosBuilder.create().withBaseURL(BASE_URL_APPLICATION).haveCredentials().toDomain().initInstance(),
    PUBLIC: AxiosBuilder.create().withBaseURL(BASE_URL_APPLICATION).toDomain().initInstance(),
};

let interceptorsInitialized = false;

async function initializeAxiosInterceptors() {
    if (interceptorsInitialized) return;
    import('./interceptors/imports').then(async ({INTERCEPTORS}) => {
        await INTERCEPTORS.connection(HTTP_INSTANCES.PRIVATE)
        await INTERCEPTORS.connection(HTTP_INSTANCES.PUBLIC)
        INTERCEPTORS.serverSide(HTTP_INSTANCES.PRIVATE);
        INTERCEPTORS.serverSide(HTTP_INSTANCES.PUBLIC);
        INTERCEPTORS.serviceUnavailable(HTTP_INSTANCES.PRIVATE);
        INTERCEPTORS.networkState(HTTP_INSTANCES.PRIVATE);
        INTERCEPTORS.networkState(HTTP_INSTANCES.PUBLIC);
        INTERCEPTORS.timeOut(HTTP_INSTANCES.PRIVATE);
        INTERCEPTORS.timeOut(HTTP_INSTANCES.PUBLIC);
        INTERCEPTORS.notification(HTTP_INSTANCES.PRIVATE);
        INTERCEPTORS.notification(HTTP_INSTANCES.PUBLIC);

        interceptorsInitialized = true;
    });
}

export {HTTP_INSTANCES as axios_instances, initializeAxiosInterceptors};
