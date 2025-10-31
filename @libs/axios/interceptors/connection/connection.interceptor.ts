import * as Axios from "axios";
import {EToastTypes} from "@enums/toastTypes.enum";
import {INTERCEPTOR_MESSAGES} from "@libs/axios/interceptors/messages.interceptor";
import {messageNotification} from "@components/toast/toast.call";


function noConnectionErrorHandler(config: Axios.InternalAxiosRequestConfig) {
    messageNotification(INTERCEPTOR_MESSAGES._no_internet_connection, EToastTypes.ERROR);
    return config;
}

function connectionIsNotReachableErrorHandler(config: Axios.InternalAxiosRequestConfig) {
    messageNotification(INTERCEPTOR_MESSAGES._slow_connection, EToastTypes.ERROR);
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
