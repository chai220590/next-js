import { RootState } from "@/services/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _, { uniqueId } from "lodash";
import { v4 as uuid_v4 } from "uuid";

export type CreatePageDTO = {
  title: string | any;
  slug: string | any;
  body: Array<any>;
  [x: string]: any;
};

type AdminPageState = {
  page: CreatePageDTO;
  createPageErrorMessage: {
    slug: string;
    title: string;
  };
  editPageId: string | undefined;
};

const initialState: AdminPageState = {
  page: {
    body: [],
    title: "",
    slug: "",
  },
  createPageErrorMessage: {
    slug: "",
    title: "",
  },
  editPageId: undefined,
};

const AdminPageSlice = createSlice({
  name: "adminPage",
  initialState,
  reducers: {
    resetEditPage(state: AdminPageState, { payload }: PayloadAction<any>) {
      state.editPageId = undefined;
      state.page = {
        body: [],
        title: "",
        slug: "",
      };
    },
    setEditPage(state: AdminPageState, { payload }: PayloadAction<any>) {
      state.page = {
        ...payload,
        body: payload?.body?.map((x: any) => {
          return {
            ...x,
            id: `${uniqueId()}${uuid_v4()}`,
          };
        }),
      };
      state.editPageId = payload._id;
    },
    createPage(state: AdminPageState, { payload }: PayloadAction<any>) {},
    updatePage(state: AdminPageState, { payload }: PayloadAction<any>) {},
    setCreatePageErrorMessage(
      state: AdminPageState,
      { payload }: PayloadAction<any>
    ) {
      state.createPageErrorMessage = {
        ...state.createPageErrorMessage,
        ...payload,
      };
    },
    setCreatePage(state: AdminPageState, { payload }: PayloadAction<any>) {
      state.page = payload;
    },
    setHeader(state: AdminPageState, { payload }: PayloadAction<any>) {
      state.page.body = payload;
    },
    addNewContentWidget(
      state: AdminPageState,
      { payload }: PayloadAction<any>
    ) {
      state.page.body = [
        ...state.page.body,
        { ...payload, index: state.page.body.length },
      ];
    },
    changeContentWidget(
      state: AdminPageState,
      { payload }: PayloadAction<any>
    ) {
      const updatedArray = _.map(state.page.body, (item) =>
        item.id === payload.id ? payload : item
      );
      state.page.body = updatedArray;
    },
    removeContentWidget(
      state: AdminPageState,
      { payload }: PayloadAction<any>
    ) {
      const updatedArray = _.filter(state.page.body, (o) => {
        return o.id !== payload;
      });
      state.page.body = updatedArray;
    },
    getDetailPageById(
      state: AdminPageState,
      { payload }: PayloadAction<any>
    ) {},
  },
});

const AdminPageReducer = AdminPageSlice.reducer;
export default AdminPageReducer;

export const AdminPageActions = AdminPageSlice.actions;

export const AdminPageSelectors = {
  body: (state: RootState) => state.adminPage.page.body,
  createPageErrorMessage: (state: RootState) =>
    state.adminPage.createPageErrorMessage,
  page: (state: RootState) => state.adminPage.page,
  editPageId: (state: RootState) => state.adminPage.editPageId,
};
