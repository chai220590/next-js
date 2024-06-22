import SysFetch from "../../../services/fetch";

const REQUEST = {
  SETTING: "setting/get",
};

const AdminRequest = {
  getSystemSetting: (body) => {
    return SysFetch.post(REQUEST.SETTING, body);
  },
};
export default AdminRequest;
