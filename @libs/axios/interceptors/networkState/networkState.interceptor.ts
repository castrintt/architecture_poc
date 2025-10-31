import {messageNotification} from "@components/toast/toast.call";
import * as Axios from "axios";
import {INTERCEPTOR_MESSAGES} from "@libs/axios/interceptors/messages.interceptor";
import {EToastType} from "@enums/EToastTypes";

export async function networkStateConnectionMiddlewareHandler(error: any) {
    if (error.message.includes('ExpoNetwork.getNetworkStateAsync') || error.message.includes('Network Error')) messageNotification(INTERCEPTOR_MESSAGES._no_connection, EToastType.ERROR);
    return Promise.reject(error);
}


export function networkStateConnectionMiddleware(INSTANCE: Axios.AxiosInstance) {
    INSTANCE.interceptors.response.use(async (response) => response, async (error) => await networkStateConnectionMiddlewareHandler(error));
}
