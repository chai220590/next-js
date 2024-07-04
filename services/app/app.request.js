import SysFetch from "../fetch";

const REQUEST = {
  SETTING: "settings/web",
  UPDATE: "setting/update",
};

const AppRequest = {
  getSystemSetting: (body) => {
    return SysFetch.get(`${REQUEST.SETTING}`);
  },
};
export default AppRequest;
