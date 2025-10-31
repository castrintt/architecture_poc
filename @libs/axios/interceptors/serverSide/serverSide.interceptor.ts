import {EHttpStatusCode} from "@enums/statusCode.enum";
import {messageNotification} from "@components/toast/toast.call";
import {EToastTypes} from "@enums/toastTypes.enum";
import {AxiosInstance} from "axios";
import {INTERCEPTOR_MESSAGES} from "@libs/axios/interceptors/messages.interceptor";

async function serverSideErrorMiddlewareHandler(error: any) {
    const serverSideErrorSubject = String(EHttpStatusCode.INTERNAL_SERVER_ERROR);
    if (error.message.includes(serverSideErrorSubject)) messageNotification(INTERCEPTOR_MESSAGES._server_side_error, EToastTypes.ERROR);
    return Promise.reject(error);
}

export function serverSideErrorMiddleware(INSTANCE: AxiosInstance) {
    INSTANCE.interceptors.response.use((response) => response, async (error) => await serverSideErrorMiddlewareHandler(error));
}
