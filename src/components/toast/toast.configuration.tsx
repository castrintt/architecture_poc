import {ToastConfig, ToastConfigParams} from 'react-native-toast-message';
import {ToastComponent}                 from './toast.component';
import {EToastTypes}                    from "@enums/toastTypes.enum";

export const toastConfiguration: ToastConfig = {
    success: ({text1, isVisible}: ToastConfigParams<any>) => (
        <ToastComponent
            message={text1 ?? ''}
            type={EToastTypes.SUCCESS}
            visible={isVisible}
        />
    ),
    error: ({text1, isVisible}: ToastConfigParams<any>) => (
        <ToastComponent
            message={text1 ?? ''}
            type={EToastTypes.ERROR}
            visible={isVisible}
        />
    ),
    warning: ({text1, isVisible}: ToastConfigParams<any>) => (
        <ToastComponent
            message={text1 ?? ''}
            type={EToastTypes.WARNING}
            visible={isVisible}
        />
    )
};
