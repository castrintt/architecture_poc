import {AxiosInstance} from "axios";
import {messageNotification} from "@components/toast/toast.call";
import {EToastTypes} from "@enums/toastTypes.enum";

export function catchResponseErrorMessage(INSTANCE: AxiosInstance) {

    INSTANCE.interceptors.response.use((response) => response, async (error) => {
        console.log('err res', error)
        if (error?.response?.data && Array.isArray(error.response.data)) messageNotification(error.response.data[0].value, EToastTypes.ERROR);
        return Promise.reject(error);
    });
}