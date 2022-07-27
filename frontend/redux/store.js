import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter.js'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})