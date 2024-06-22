import { put, takeLeading } from "redux-saga/effects";
import { LoginActions } from "./login.slice";
import LoginRequest from "./login.request";
import { AppActions } from "@/services/app/app.slice";

function* LoginSaga() {
  yield takeLeading(LoginActions.checkLogin, checkLogin);
}

function* checkLogin({ payload }) {
  try {
    yield put(AppActions.setIsLoading(true));
    const rs = yield LoginRequest.checklogin(payload);
    yield put(AppActions.setIsLoading(false));
    if (!!rs) {
      yield put(LoginActions.setAccessToken(rs));
    }
  } catch (error) {
    yield put(AppActions.setIsLoading(false));
  }
}

export default LoginSaga;
