import {EToastType} from "@enums/EToastTypes";

export type ToastTypes = {
    type: EToastType;
    message: string;
    visible: boolean
};
