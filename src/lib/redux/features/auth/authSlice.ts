import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./interface";

const initialState: IInitialState = {
    userInformation:{
        _id: "",
        email: "",
        role: "",
        fullName: "",
        activeStatus: false,
        contact: ""
    },
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        clearUserInformation: (state) => {
            state.userInformation = initialState.userInformation
        },
        setUserInformation: (state, action) => {
            state.userInformation = { ...initialState.userInformation, ...action.payload }
        },
    }
})

export const { setUserInformation, clearUserInformation } = authSlice.actions
export default authSlice.reducer