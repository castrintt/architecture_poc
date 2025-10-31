import {serverSideErrorMiddleware} from "@libs/axios/interceptors/serverSide/serverSide.interceptor";
import {timeOutMiddleware} from "@libs/axios/interceptors/timeout/timeout.interceptor";
import {catchResponseErrorMessage} from "@libs/axios/interceptors/message/message.interceptor";
import {networkStateConnectionMiddleware} from "@libs/axios/interceptors/networkState/networkState.interceptor";
import {serviceUnavailableMiddleware} from "@libs/axios/interceptors/serviceUnavailable/serviceUnavailable.interceptor";
import {connectionMiddleware} from "@libs/axios/interceptors/connection/connection.interceptor";

export const INTERCEPTORS = {
    serverSide: serverSideErrorMiddleware,
    timeOut: timeOutMiddleware,
    notification: catchResponseErrorMessage,
    networkState: networkStateConnectionMiddleware,
    serviceUnavailable: serviceUnavailableMiddleware,
    connection: connectionMiddleware,
}