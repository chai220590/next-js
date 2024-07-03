import SysFetch from "../fetch";

const REQUEST = {
  SETTING: "settings",
  UPDATE: "setting/update",
};

const AppRequest = {
  getSystemSetting: (body) => {
    return SysFetch.get(REQUEST.SETTING, body);
  },
};
export default AppRequest;
