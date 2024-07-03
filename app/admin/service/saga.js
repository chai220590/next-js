import { put, takeLatest, select, delay } from "redux-saga/effects";
import { AdminActions, AdminSelectors } from "./slice";
import AdminRequest from "./request";
import { AppActions } from "@/services/app/app.slice";
import _ from "lodash";
import { toast } from "react-toastify";

function* AdminSaga() {
  yield takeLatest(AdminActions.getSystemSetting, getSystemSetting);
  yield takeLatest(AdminActions.saveSystemSetting, saveSystemSetting);
}

export default AdminSaga;

function* saveSystemSetting() {
  try {
    yield put(AppActions.setIsLoading(true));
    yield delay(100);
    const systemSetting = yield select(AdminSelectors.systemSetting);

    const response = yield AdminRequest.saveSystemSetting(
      systemSetting.map((x) => {
        return {
          id: x._id,
          value: x.value,
        };
      })
    );
    yield put(AppActions.setIsLoading(false));
    if (response.success) {
      toast.success(response.message);
      yield put(AppActions.setIsLoading(false));
    }
  } catch (error) {
    yield put(AppActions.setIsLoading(false));
    console.log(error);
  }
}

function* getSystemSetting({ payload }) {
  try {
    yield put(AppActions.setIsLoading(true));
    const rs = yield AdminRequest.getSystemSetting(payload);
    yield put(AppActions.setIsLoading(false));
    if (rs.success) {
      yield put(AdminActions.setSystemSetting(rs?.data));
    }
  } catch (error) {
    console.log(error);
    yield put(AppActions.setIsLoading(false));
  }
}
