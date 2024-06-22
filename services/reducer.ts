import LoginReducer from "@/app/login/service/login.slice";
import AppReducer from "./app/app.slice";
import AdminReducer from "@/app/admin/service/slice";

export const reducers = {
  app: AppReducer,
  login: LoginReducer,
  admin: AdminReducer,
};
