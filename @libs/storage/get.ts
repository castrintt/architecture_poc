import * as SecureStore from 'expo-secure-store';

export const getSecureStoreAsync = async (key: string) => {
    try {
        const value = await SecureStore.getItemAsync(key);
        return value ? JSON.parse(value) : null;
    } catch (_) {
        return null;
    }
};

