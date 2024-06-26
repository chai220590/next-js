import SysFetch from "../fetch";

const REQUEST = {
  SETTING: "setting/get",
  UPDATE: "setting/update",
};

const AppRequest = {
  getSystemSetting: (body) => {
    return SysFetch.post(REQUEST.SETTING, body);
  },
};
export default AppRequest;
