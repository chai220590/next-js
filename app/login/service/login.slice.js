import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setAccessToken: (state, { payload }) => {
      state.accessToken = payload;
    },
    checkLogin: (state, { payload }) => {},
  },
});

const LoginReducer = LoginSlice.reducer;
export default LoginReducer;

export const LoginActions = LoginSlice.actions;

export const LoginSelectors = {
  accessToken: (state) => state.login.accessToken,
};
