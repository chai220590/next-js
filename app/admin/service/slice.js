import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  systemSetting: [],
};

const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    getSystemSetting: (state, { payload }) => {},
    setSystemSetting: (state, { payload }) => {
      state.systemSetting = payload || [];
    },
  },
});

const AdminReducer = AdminSlice.reducer;
export default AdminReducer;

export const AdminActions = AdminSlice.actions;

export const AdminSelectors = {
  systemSetting: (state) => state.admin.systemSetting,
};
