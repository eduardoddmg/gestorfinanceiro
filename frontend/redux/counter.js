import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value+=1;
        },
        decrement: (state) => {
            state.value-=1;
        },
        reset: (state, payload) => {
            state.value = 0;
            console.log(state, payload);
        }
    }
});

export const { increment, decrement, reset } = counterSlice.actions;   

export default counterSlice.reducer;