import type {EToastType} from "@domain/enum/EToastType.enum";

export type ToastTypes = {
    type: EToastType;
    message: string;
    visible: boolean
};
