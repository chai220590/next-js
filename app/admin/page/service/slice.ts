import { RootState } from "@/services/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

type AdminState = {
  page: {
    body: Array<any>;
  };
};

const initialState: AdminState = {
  page: {
    body: [],
  },
};

const AdminPageSlice = createSlice({
  name: "adminPage",
  initialState,
  reducers: {
    setHeader(state: AdminState, { payload }: PayloadAction<any>) {
      state.page.body = payload;
    },
    addNewContentWidget(state: AdminState, { payload }: PayloadAction<any>) {
      state.page.body = [
        ...state.page.body,
        { ...payload, index: state.page.body.length },
      ];
    },
    changeContentWidget(state: AdminState, { payload }: PayloadAction<any>) {
      const updatedArray = _.map(state.page.body, (item) =>
        item.id === payload.id ? payload : item
      );
      state.page.body = updatedArray;
    },
    removeContentWidget(state: AdminState, { payload }: PayloadAction<any>) {
      const updatedArray = _.filter(state.page.body, (o) => {
        return o.id !== payload;
      });
      state.page.body = updatedArray;
    },
  },
});

const AdminPageReducer = AdminPageSlice.reducer;
export default AdminPageReducer;

export const AdminPageActions = AdminPageSlice.actions;

export const AdminPageSelectors = {
  body: (state: RootState) => state.adminPage.page.body,
};
