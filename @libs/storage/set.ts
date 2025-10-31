import * as SecureStore from 'expo-secure-store';

export const setSecureStoreAsync = async (key: string, value: unknown) => {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
};
