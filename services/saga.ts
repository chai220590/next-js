import { call, all } from "redux-saga/effects";
import LoginSaga from "@/app/login/service/login.saga";
import AdminSaga from "@/app/admin/service/saga";
import AppSaga from "@/services/app/app.saga";
function* rootSaga() {
  yield all([call(AppSaga), call(LoginSaga), call(AdminSaga)]);
}
export default rootSaga;
