import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const userSlice=createSlice({
    name: 'user',
    initialState:{
        user:{},
        isLoggedIn:false,
    },reducers:{
        signup:(state,action)=>{
            state.user = { ...action.payload, id: uuidv4() };
            state.isLoggedIn=true
        },
        logout:(state)=>{
            state.user={}
            state.isLoggedIn=false
        }

    }

})

export const {signup,logout}=userSlice.actions
export default userSlice.reducer