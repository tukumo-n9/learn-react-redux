import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    incrementAmount: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    setIncrementAmount: (state, action) => {
      state.incrementAmount = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  setIncrementAmount,
} = counterSlice.actions;
export default counterSlice.reducer;
