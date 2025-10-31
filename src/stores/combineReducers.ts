import {combineReducers} from "@reduxjs/toolkit";
import * as Reducers     from "./slices/imports";

export const rootReducer = combineReducers({
    auth: Reducers.authReducer,
});
