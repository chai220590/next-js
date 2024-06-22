import { call, all } from "redux-saga/effects";
import LoginSaga from "@/app/login/service/login.saga";
import AdminSaga from "@/app/admin/service/saga";
function* rootSaga() {
  yield all([call(LoginSaga), call(AdminSaga)]);
}
export default rootSaga;
