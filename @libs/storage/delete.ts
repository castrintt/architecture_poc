import * as SecureStore from 'expo-secure-store';

export const deleteSecureStoreAsync = async (key: string) => {
     await SecureStore.deleteItemAsync(key);
};
