import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    listProducts: [],
    selectedCategory: "",
    listCategories: [],
    query: "",
  },
  reducers: {
    setQuery: (state, data) => {
      state.login = data.payload;
    },
    setSelectedCategory: (state, data) => {
      state.selectedCategory = data.payload;
    },
    setSearchCategories: (state, data) => {
      state.listCategories = data.payload;
    },
    setSearchProducts: (state, data) => {
      state.listProducts = data.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setQuery,
  setSearchCategories,
  setSearchProducts,
  setSelectedCategory,
} = searchSlice.actions;

export default searchSlice.reducer;
