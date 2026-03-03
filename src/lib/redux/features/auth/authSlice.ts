import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./interface";

const initialState: IInitialState = {
    userInformation:{
        id: "",
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
            setUserId: (state, action) => {
      state.userInformation.id = action.payload;
    },
    }
})

export const { setUserInformation, clearUserInformation, setUserId } = authSlice.actions
export default authSlice.reducer