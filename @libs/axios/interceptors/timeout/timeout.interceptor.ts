import {messageNotification} from "@components/toast/toast.call";
import * as Axios from "axios";
import {INTERCEPTOR_MESSAGES} from "@libs/axios/interceptors/messages.interceptor";
import {EToastType} from "@domain/enum/EToastType.enum";

const ERR_NETWORK = 'ERR_NETWORK';


export async function timeOutMiddlewareHandler(error: any) {
    if (error.message && error.message === ERR_NETWORK) messageNotification(INTERCEPTOR_MESSAGES._connection_aborted, EToastType.ERROR);
    return Promise.reject(error);
}

export function timeOutMiddleware(INSTANCE: Axios.AxiosInstance) {
    INSTANCE.interceptors.response.use((response) => response, async (error) => await timeOutMiddlewareHandler(error));
}