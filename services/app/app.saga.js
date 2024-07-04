import { AppActions } from "@/services/app/app.slice";
import _ from "lodash";
import { put, takeLatest } from "redux-saga/effects";
import AppRequest from "./app.request";
function* AppSaga() {
  yield takeLatest(AppActions.getSystemSetting, getSystemSetting);
  yield getSystemSetting();
}

function* getSystemSetting() {
  const rs = yield AppRequest.getSystemSetting();
  if (rs.success) {
    const temp = _.reduce(
      rs?.settings,
      function (result, item) {
        result[item.code] = item.value;
        return result;
      },
      {}
    );
    yield put(AppActions.setSystemSetting(temp));
  }
}

export default AppSaga;
