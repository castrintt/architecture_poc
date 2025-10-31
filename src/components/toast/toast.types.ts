import {EToastTypes} from '@enums/toastTypes.enum';

export type ToastTypes = {
    type: EToastTypes;
    message: string;
    visible: boolean
};
