import SysFetch from "../../../services/fetch";
import qs from "querystring";
const REQUEST = {
  SETTING: "settings",
  UPDATE: "settings",
};

const AdminRequest = {
  getSystemSetting: (body) => {
    return SysFetch.get(`${REQUEST.SETTING}?${qs.stringify(body)}`);
  },
  saveSystemSetting: (body) => {
    return SysFetch.put(REQUEST.UPDATE, body);
  },
};
export default AdminRequest;
