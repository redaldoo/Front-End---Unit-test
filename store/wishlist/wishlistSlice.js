import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    listProducts: [],
  },
  reducers: {
    setWishlist: (state, data) => {
      state.listProducts = data.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
