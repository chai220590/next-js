import LoginReducer from "@/app/login/service/login.slice";
import AppReducer from "./app/app.slice";

export const reducers = {
  app: AppReducer,
  login: LoginReducer,
};
