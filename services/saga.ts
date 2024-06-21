import { call, all } from "redux-saga/effects";
import LoginSaga from "@/app/login/service/login.saga";
function* rootSaga() {
  yield all([call(LoginSaga)]);
}
export default rootSaga;
