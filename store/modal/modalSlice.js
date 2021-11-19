import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    login: false,
    signup: false,
  },
  reducers: {
    showLogin: (state) => {
      state.login = true;
    },
    hideLogin: (state) => {
      state.login = false;
    },
    showSignup: (state) => {
      state.signup = true;
    },
    hideSignup: (state) => {
      state.signup = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showLogin, hideLogin, showSignup, hideSignup } =
  modalSlice.actions;

export default modalSlice.reducer;
