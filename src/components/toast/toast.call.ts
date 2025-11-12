import Toast from 'react-native-toast-message';
import type {EToastType} from "@domain/enum/EToastType.enum";

export const callToast = (message: string, type: EToastType, visibilityTime: number = 3000) => {
    Toast.show({
        visibilityTime, position: 'top', type: type, text1: message, autoHide: true, swipeable: true
    });
};

export const messageNotification =(message: string, type: EToastType) => {
    callToast(message, type);
}