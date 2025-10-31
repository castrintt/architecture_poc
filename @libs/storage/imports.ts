import {deleteSecureStoreAsync} from "@libs/storage/delete";
import {setSecureStoreAsync} from "@libs/storage/set";
import {getSecureStoreAsync} from "@libs/storage/get";

export const SecureStore = {
    GET_ASYNC: getSecureStoreAsync,
    DELETE_ASYNC: deleteSecureStoreAsync,
    SET_ASYNC: setSecureStoreAsync,
}