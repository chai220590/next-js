// navigationMiddleware.ts
import Router from "next/router";
import { Middleware } from "redux";

const navigationMiddleware: Middleware = (store) => (next) => (action: any) => {
  if (action.type === "NAVIGATE") {
    if (typeof window !== "undefined") {
      Router.push(action.payload);
    }
  }
  return next(action);
};

export default navigationMiddleware;
