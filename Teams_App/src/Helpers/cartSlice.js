import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

console.log(cartSlice);

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
