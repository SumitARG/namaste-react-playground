import {createSlice} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const loginSlice = createSlice({
    name:"login",
    initialState: {
        value:{
            username: "",
            userImage:"",
        }
    },
    reducers: {
        onLogin:(state, action) => {
            state.value = action.payload;
        },
        onLogout: () => {
            state.value = {
                username: "",
                userImage:"",
            }
        }
    }
});

export const {onLogin, onLogout} = loginSlice.actions;

export default loginSlice.reducer;
