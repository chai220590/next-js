import SysFetch from "../../../services/fetch";

const REQUEST = {
  LOGIN: "login",
};

const LoginRequest = {
  checklogin: (data) => {
    return SysFetch.post(REQUEST.LOGIN, data);
  },
};
export default LoginRequest;
