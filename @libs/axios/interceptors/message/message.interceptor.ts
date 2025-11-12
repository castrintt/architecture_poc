import {AxiosInstance} from "axios";
import {messageNotification} from "@components/toast/toast.call";
import {EToastType} from "@domain/enum/EToastType.enum";

export function catchResponseErrorMessage(INSTANCE: AxiosInstance) {

    INSTANCE.interceptors.response.use((response) => response, async (error) => {
        console.log('err res', error)
        if (error?.response?.data && Array.isArray(error.response.data)) messageNotification(error.response.data[0].value, EToastType.ERROR);
        return Promise.reject(error);
    });
}