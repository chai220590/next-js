import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
});

const LoginReducer = LoginSlice.reducer;
export default LoginReducer;

export const LoginActions = LoginSlice.actions;
