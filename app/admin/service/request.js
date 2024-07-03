import SysFetch from "../../../services/fetch";
import qs from "querystring";
const REQUEST = {
  SETTING: "settings",
  UPDATE: "setting/update",
};

const AdminRequest = {
  getSystemSetting: (body) => {
    return SysFetch.get(`${REQUEST.SETTING}?${qs.stringify(body)}`);
  },
  saveSystemSetting: (body) => {
    return SysFetch.post(REQUEST.UPDATE, body);
  },
};
export default AdminRequest;
