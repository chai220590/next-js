import SysFetch from "../../../services/fetch";

const REQUEST = {
  SETTING: "setting/get",
  UPDATE: "setting/update",
};

const AdminRequest = {
  getSystemSetting: (body) => {
    return SysFetch.post(REQUEST.SETTING, body);
  },
  saveSystemSetting: (body) => {
    return SysFetch.post(REQUEST.UPDATE, body);
  },
};
export default AdminRequest;
