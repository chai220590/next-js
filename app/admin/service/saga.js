import { put, takeLatest, takeLeading, delay } from "redux-saga/effects";
import { AdminActions } from "./slice";
import AdminRequest from "./request";
import { AppActions } from "@/services/app/app.slice";

function* AdminSaga() {
  yield takeLeading(AdminActions.getSystemSetting, getSystemSetting);
  yield takeLatest(AdminActions.saveSystemSetting, saveSystemSetting);
}

function* saveSystemSetting({ payload }) {
  try {
    const { body, onSuccess } = payload;
    yield delay(1000);
    yield AdminRequest.saveSystemSetting(body);
    yield put(AppActions.getSystemSetting());
    onSuccess && onSuccess();
  } catch (error) {
    console.log(error);
  }
}

function* getSystemSetting({ payload }) {
  try {
    yield put(AppActions.setIsLoading(true));
    const rs = yield AdminRequest.getSystemSetting(payload);
    yield put(AppActions.setIsLoading(false));
    if (rs.success) {
      yield put(AdminActions.setSystemSetting(rs?.body));
    }
  } catch (error) {
    console.log(error);
    yield put(AppActions.setIsLoading(false));
  }
}

export default AdminSaga;
