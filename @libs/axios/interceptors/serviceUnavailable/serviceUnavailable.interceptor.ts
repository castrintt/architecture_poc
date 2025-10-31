import {messageNotification} from "@components/toast/toast.call";
import * as Axios from "axios";
import {INTERCEPTOR_MESSAGES} from "@libs/axios/interceptors/messages.interceptor";
import EHttpStatus from "@enums/EHttpStatus";
import {EToastType} from "@enums/EToastTypes";

export async function serviceUnavailableMiddlewareHandler(error: any) {
    const subject = String(EHttpStatus.SERVICE_UNAVAILABLE);
    if (error.message && error.message.includes(subject)) messageNotification(INTERCEPTOR_MESSAGES._service_unavailable, EToastType.ERROR);
    return Promise.reject(error);
}

export function serviceUnavailableMiddleware(INSTANCE: Axios.AxiosInstance) {
    INSTANCE.interceptors.response.use((response) => response, async (error) => await serviceUnavailableMiddlewareHandler(error));
}
