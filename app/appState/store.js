import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/CounterSlice'
import loginReducer from './Login/LoginSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const store = configureStore({
   reducer: { 
      counter : counterReducer,
      login:loginReducer,
    },
})

export default store;