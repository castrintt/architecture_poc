import {ToastConfig, ToastConfigParams} from 'react-native-toast-message';
import {ToastComponent} from './toast.component';
import {EToastType} from "@enums/EToastTypes";

export const toastConfiguration: ToastConfig = {
    success: ({text1, isVisible}: ToastConfigParams<any>) => (
        <ToastComponent
            message={text1 ?? ''}
            type={EToastType.SUCCESS}
            visible={isVisible}
        />
    ),
    error: ({text1, isVisible}: ToastConfigParams<any>) => (
        <ToastComponent
            message={text1 ?? ''}
            type={EToastType.ERROR}
            visible={isVisible}
        />
    ),
    warning: ({text1, isVisible}: ToastConfigParams<any>) => (
        <ToastComponent
            message={text1 ?? ''}
            type={EToastType.WARNING}
            visible={isVisible}
        />
    )
};
