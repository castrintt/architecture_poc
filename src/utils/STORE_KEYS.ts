import Constants from 'expo-constants';

const {expoConfig} = Constants;

export const STORE_KEYS = {
    TOKEN: expoConfig!.extra!.TOKEN,
    URL: {
        LOCAL: expoConfig!.extra!.URL.LOCAL,
        HML: expoConfig!.extra!.URL.HML,
        PROD: expoConfig!.extra!.URL.PROD,
    },
    eas: {
        projectId: expoConfig!.extra!.eas.projectId,
    },
}

// if (__DEV__) {
//     console.log('📋 STORE_KEYS loaded:', STORE_KEYS);
// }