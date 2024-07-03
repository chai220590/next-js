import { put, takeLeading } from "redux-saga/effects";
import { LoginActions } from "./login.slice";
import LoginRequest from "./login.request";
import { AppActions } from "@/services/app/app.slice";
import { setConfigAxios } from "@/services/fetch";

function* LoginSaga() {
  yield initAccessToken();
  yield takeLeading(LoginActions.checkLogin, checkLogin);
}

function* initAccessToken() {
  if (typeof window !== "undefined" && window.localStorage) {
    const accessToken = yield localStorage.getItem("accessToken");
    if (accessToken) {
      yield put(LoginActions.setAccessToken(accessToken));
      setConfigAxios(accessToken);
    }
  }
}

function* checkLogin({ payload }) {
  try {
    yield put(AppActions.setIsLoading(true));
    const rs = yield LoginRequest.checklogin(payload);
    yield put(AppActions.setIsLoading(false));

    if (rs.success) {
      localStorage.setItem("accessToken", rs.accessToken);
      setConfigAxios(rs.accessToken);
      yield put(LoginActions.setAccessToken(rs.accessToken));
    }
  } catch (error) {
    yield put(AppActions.setIsLoading(false));
  }
}

export default LoginSaga;
