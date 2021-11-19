import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    listProducts: [],
    totalAmount: 0,
  },
  reducers: {
    setProduct: (state, data) => {
      state.listProducts = data.payload;
    },
    setTotalAmount: (state, data) => {
      state.totalAmount = data.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProduct, setTotalAmount } = cartSlice.actions;

export default cartSlice.reducer;
