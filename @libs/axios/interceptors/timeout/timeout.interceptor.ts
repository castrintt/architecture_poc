import {messageNotification} from "@components/toast/toast.call";
import {EToastTypes} from "@enums/toastTypes.enum";
import * as Axios from "axios";
import {INTERCEPTOR_MESSAGES} from "@libs/axios/interceptors/messages.interceptor";

const ERR_NETWORK = 'ERR_NETWORK';


export async function timeOutMiddlewareHandler(error: any) {
    if (error.message && error.message === ERR_NETWORK) messageNotification(INTERCEPTOR_MESSAGES._connection_aborted, EToastTypes.ERROR);
    return Promise.reject(error);
}

export function timeOutMiddleware(INSTANCE: Axios.AxiosInstance) {
    INSTANCE.interceptors.response.use((response) => response, async (error) => await timeOutMiddlewareHandler(error));
}