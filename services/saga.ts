import { call, all } from "redux-saga/effects";
import LoginSaga from "@/app/login/service/login.saga";
import AdminSaga from "@/app/admin/service/saga";
import AppSaga from "@/services/app/app.saga";
import PostSaga from "@/app/admin/post/service/saga";
import NewsSaga from "@/app/news/service/saga";
import AdminPageSaga from "@/app/admin/page/service/saga";
function* rootSaga() {
  yield all([
    call(AppSaga),
    call(LoginSaga),
    call(AdminSaga),
    call(PostSaga),
    call(NewsSaga),
    call(AdminPageSaga),
  ]);
}
export default rootSaga;
