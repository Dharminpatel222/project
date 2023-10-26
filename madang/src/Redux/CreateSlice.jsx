import { createSlice } from "@reduxjs/toolkit";

const initialState = {
//   user: JSON.parse(localStorage.getItem("user")) || {},
//   token: JSON.parse(localStorage.getItem("token"))||''
};

const authslice = createSlice({
    name:"name",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user = action?.payload?.data;
            state.token = action?.payload?.token;
            localStorage.setItem("user",JSON.stringify(action.payload.data));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
        },
        logout:(state)=>{
            state.user = {};
            state.token = '';
            localStorage.clear();
        }
    }
})
export default authslice.reducer;

export const {login,logout} = authslice.actions;