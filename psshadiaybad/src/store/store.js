import { configureStore } from '@reduxjs/toolkit';
import autReducer from './authSlice';



const store = configureStore({
    reducer:autReducer
})

export default store
