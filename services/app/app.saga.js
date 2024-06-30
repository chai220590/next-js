import { AppActions } from "@/services/app/app.slice";
import { put, takeLatest, takeLeading } from "redux-saga/effects";
import AppRequest from "./app.request";
import _ from "lodash";
function* AppSaga() {
  yield takeLatest(AppActions.getSystemSetting, getSystemSetting);
}

function* getSystemSetting() {
  try {
    yield put(AppActions.setIsLoading(true));
    const rs = yield AppRequest.getSystemSetting();
    yield put(AppActions.setIsLoading(false));
    if (rs.success) {
      const temp = _.reduce(
        rs?.body,
        function (result, item) {
          result[item.code] = item.value;
          return result;
        },
        {}
      );
      yield put(AppActions.setSystemSetting(temp));
    }
  } catch (error) {
    console.log(error);
    yield put(AppActions.setIsLoading(false));
  }
}

export default AppSaga;
