import {createSlice } from "@reduxjs/toolkit";


const initialState =[
    {
        LOGIN:false,
        ERROR:''
    }
]


const loginSlice = createSlice({
    name :'Login',
    initialState,
    reducers:{
        checkLogin(state,action){
            state.push(action.payload)
        }
    }
})

export const { checkLogin } = loginSlice.actions;
export default loginSlice.reducer;