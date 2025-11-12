import {createSlice} from "@reduxjs/toolkit";
import type {UserReducerInitialState} from "@store/slices/user/reducer.types";

const initialState: UserReducerInitialState = {
    isAuthenticated: false,
};

const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.isAuthenticated = false
        },
    },
});

export const {login, logout} =
    userReducer.actions;
export default userReducer.reducer;
