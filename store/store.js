import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import modalReducer from "./modal/modalSlice";
import searchSlice from "./search/searchSlice";
import wishlistSlice from "./wishlist/wishlistSlice";

export default configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartSlice,
    wishlist: wishlistSlice,
    search: searchSlice,
  },
});
