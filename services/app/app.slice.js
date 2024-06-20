import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

const AppReducer = AppSlice.reducer;

export default AppReducer;

export const AppActions = AppSlice.actions;

export const AppSelectors = {
  isLoading: (state) => state.app.isLoading,
};
