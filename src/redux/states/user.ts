import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";

export const EmptyUserState: UserInfo = {
    localId: "",
    displayName: "",
    email: "",
    idToken: "",
}

export const persistLocalStorageUser = (userInfo: UserInfo) => {
    localStorage.setItem('user', JSON.stringify({ ...userInfo }));
}

export const clearLocalStorageUser = (userInfo: UserInfo) => {
    localStorage.removeItem('user');
}

export const userSlice = createSlice({
    name: "user",
    initialState: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : EmptyUserState,
    reducers: {
        logUser: (state, action) => {
            persistLocalStorageUser(action.payload);
            return action.payload;
        },
        updateUser: (state, action) => {
            const result = { ...state, ...action.payload };
            persistLocalStorageUser(result);
            return result;
        },
        resetUser: () => {
            clearLocalStorageUser;
            return EmptyUserState;
        }
    }
})

export const { logUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;