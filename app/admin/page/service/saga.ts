import SysFetch from "@/services/fetch";
import _ from "lodash";
import { toast } from "react-toastify";
import { put, select, takeLatest } from "redux-saga/effects";
import { AdminPageActions, AdminPageSelectors, CreatePageDTO } from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { AppActions } from "@/services/app/app.slice";

function* AdminPageSaga() {
  yield takeLatest(AdminPageActions.createPage, createPage);
  yield takeLatest(AdminPageActions.updatePage, updatePage);
  yield takeLatest(AdminPageActions.getDetailPageById, getDetailPageById);
}
export default AdminPageSaga;

function* updatePage() {
  try {
    yield put(AppActions.setIsLoading(true));

    const createPage: CreatePageDTO = yield select(AdminPageSelectors.page);
    const _id: string = yield select(AdminPageSelectors.editPageId);
    const { title, slug, body } = createPage;

    let hasError = false;
    // validate slug is empty
    if (_.isEmpty(title)) {
      yield put(
        AdminPageActions.setCreatePageErrorMessage({
          title: "Tiêu đề trang không được bỏ trống",
        })
      );
      hasError = true;
    }

    // validate slug is empty
    if (_.isEmpty(slug)) {
      yield put(
        AdminPageActions.setCreatePageErrorMessage({
          slug: "Slug không được bỏ trống",
        })
      );
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const bodyRequest = {
      title,
      slug,
      body: body.map((item, index) => {
        return {
          type: item.type,
          value: item.value,
          index,
        };
      }),
    };

    const result: {
      success: boolean;
      [x: string]: any;
    } = yield SysFetch.put(`pages/${_id}`, bodyRequest);
    yield put(AppActions.setIsLoading(false));
    if (result.success) {
      yield put(AdminPageActions.setEditPage(result.page));
      toast.success(result.message);
    } else {
      throw result.message;
    }
  } catch (error: any) {
    yield put(AppActions.setIsLoading(false));
    console.log(error);
    toast.error(error.toString());
  }
}

function* getDetailPageById({ payload }: PayloadAction<any>) {
  try {
    yield put(AppActions.setIsLoading(true));

    const { pageId } = payload;

    const result: { [x: string]: any } = yield SysFetch.get(`pages/${pageId}`);

    if (result.success) {
      yield put(AdminPageActions.setEditPage(result.page));
    } else {
      throw result.message;
    }

    yield put(AppActions.setIsLoading(false));
  } catch (error: any) {
    yield put(AppActions.setIsLoading(false));
    toast.error(error.toString());
  }
}

function* createPage() {
  try {
    yield put(AppActions.setIsLoading(true));

    const createPage: CreatePageDTO = yield select(AdminPageSelectors.page);
    const { title, slug, body } = createPage;

    let hasError = false;
    // validate slug is empty
    if (_.isEmpty(title)) {
      yield put(
        AdminPageActions.setCreatePageErrorMessage({
          title: "Tiêu đề trang không được bỏ trống",
        })
      );
      hasError = true;
    }

    // validate slug is empty
    if (_.isEmpty(slug)) {
      yield put(
        AdminPageActions.setCreatePageErrorMessage({
          slug: "Slug không được bỏ trống",
        })
      );
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const bodyRequest = {
      title,
      slug,
      body: body.map((item, index) => {
        return {
          type: item.type,
          value: item.value,
          index,
        };
      }),
    };

    const result: {
      success: boolean;
      [x: string]: any;
    } = yield SysFetch.post("pages", bodyRequest);
    yield put(AppActions.setIsLoading(false));
    if (result.success) {
      yield put(AdminPageActions.setEditPage(result.page));
      toast.success(result.message);
    } else {
      throw result.message;
    }
  } catch (error: any) {
    yield put(AppActions.setIsLoading(false));
    console.log(error);
    toast.error(error.toString());
  }
}
