import Toast from 'react-native-toast-message';
import {EToastTypes} from "../../../@domain/enum/toastTypes.enum";

export const callToast = (message: string, type: EToastTypes, visibilityTime: number = 3000) => {
    Toast.show({
        visibilityTime, position: 'top', type: type, text1: message, autoHide: true, swipeable: true
    });
};

export const messageNotification =(message: string, type: EToastTypes) => {
    callToast(message, type);
}