import {EHttpStatusCode} from "@enums/statusCode.enum";
import {messageNotification} from "@components/toast/toast.call";
import {EToastTypes} from "@enums/toastTypes.enum";
import * as Axios from "axios";
import {INTERCEPTOR_MESSAGES} from "@libs/axios/interceptors/messages.interceptor";

export async function serviceUnavailableMiddlewareHandler(error: any) {
    const subject = String(EHttpStatusCode.SERVICE_UNAVAILABLE);
    if (error.message && error.message.includes(subject)) messageNotification(INTERCEPTOR_MESSAGES._service_unavailable, EToastTypes.ERROR);
    return Promise.reject(error);
}

export function serviceUnavailableMiddleware(INSTANCE: Axios.AxiosInstance) {
    INSTANCE.interceptors.response.use((response) => response, async (error) => await serviceUnavailableMiddlewareHandler(error));
}
