import * as Axios from "axios";
import {INTERCEPTOR_MESSAGES} from "@libs/axios/interceptors/messages.interceptor";
import {messageNotification} from "@components/toast/toast.call";
import {EToastType} from "@domain/enum/EToastType.enum";


function noConnectionErrorHandler(config: Axios.InternalAxiosRequestConfig) {
    messageNotification(INTERCEPTOR_MESSAGES._no_internet_connection, EToastType.ERROR);
    return config;
}

function connectionIsNotReachableErrorHandler(config: Axios.InternalAxiosRequestConfig) {
    messageNotification(INTERCEPTOR_MESSAGES._slow_connection, EToastType.ERROR);
    return config;
}


export async function connectionMiddleware(INSTANCE: Axios.AxiosInstance) {
    INSTANCE.interceptors.request.use(async (config) => {
        // retirar os mocks
        const isConnected = true;
        const isInternetReachable = true
        if (!isConnected) return noConnectionErrorHandler(config);
        if (!isInternetReachable) return connectionIsNotReachableErrorHandler(config);
        return config;
    });
}
