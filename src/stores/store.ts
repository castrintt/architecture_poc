import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "@store/combineReducers";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const store = configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({serializableCheck: false});
    },
});

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export default store;