import {messageNotification} from "@components/toast/toast.call";
import {AxiosInstance} from "axios";
import {INTERCEPTOR_MESSAGES} from "@libs/axios/interceptors/messages.interceptor";
import {EToastType} from "@domain/enum/EToastType.enum";
import {EHttpStatus} from "@domain/enum/EHttpStatus.enum";


async function serverSideErrorMiddlewareHandler(error: any) {
    const serverSideErrorSubject = String(EHttpStatus.INTERNAL_SERVER_ERROR);
    if (error.message.includes(serverSideErrorSubject)) messageNotification(INTERCEPTOR_MESSAGES._server_side_error, EToastType.ERROR);
    return Promise.reject(error);
}

export function serverSideErrorMiddleware(INSTANCE: AxiosInstance) {
    INSTANCE.interceptors.response.use((response) => response, async (error) => await serverSideErrorMiddlewareHandler(error));
}
