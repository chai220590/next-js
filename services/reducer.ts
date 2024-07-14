import LoginReducer from "@/app/login/service/login.slice";
import AppReducer from "./app/app.slice";
import AdminReducer from "@/app/admin/service/slice";
import PostReducer from "@/app/admin/post/service/slice";
import NewsReducer from "@/app/news/service/reducer";
import AdminPageReducer from "@/app/admin/page/service/slice";

export const reducers = {
  app: AppReducer,
  login: LoginReducer,
  admin: AdminReducer,
  post: PostReducer,
  news: NewsReducer,
  adminPage: AdminPageReducer,
};
