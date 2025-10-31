import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthState} from "@store/slices/authSlice/reducer.types";


const initialState: AuthState = {
    isAuthenticated: false,
};

const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authUser: (state, {payload}: PayloadAction<boolean>) => {
            state.isAuthenticated = payload
        },
    },
});

export const {authUser} =
    authReducer.actions;
export default authReducer.reducer;
