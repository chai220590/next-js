import axios from "axios";
import CONST from "./const";
const timeout = CONST.REQUEST.TIME_OUT;
let AxiosClient = axios.create({
  baseURL: CONST.URL.API,
  timeout,
  headers: {
    "Content-Type": "application/json",
  },
});

const registerInterceptorsRequest = (clientInstance) => {
  clientInstance.interceptors.request.use(
    async (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
registerInterceptorsRequest(AxiosClient);

const registerInterceptorResponse = (clientInstance) => {
  clientInstance.interceptors.response.use(
    async (response) => {
      return response.data || response;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );
};
registerInterceptorResponse(AxiosClient);

const setConfigAxiosClient = (accessToken, clientAxiosInstance) => {
  clientAxiosInstance.defaults.headers.common = {
    "Content-Type": "application/json",
    Authorization: "",
  };
  clientAxiosInstance.defaults.timeout = timeout;
  if (accessToken) {
    clientAxiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }
};

export function setConfigAxios(accessToken) {
  setConfigAxiosClient(accessToken, AxiosClient);
}

const post = (url, data, config = {}) => {
  return AxiosClient.post(url, data, config);
};

const get = (url, data, config = {}) => {
  return AxiosClient.get(url, data, config);
};

const put = (url, data, config = {}) => {
  return AxiosClient.put(url, data, config);
};

const patch = (url, data, config = {}) => {
  return AxiosClient.patch(url, data, config);
};

const del = (url, config = {}) => {
  return AxiosClient.delete(url, config);
};

const postWithCustomHeader = (url, data, customHeaders) => {
  const config = {
    headers: {
      ...AxiosClient.defaults.headers.common,
      ...customHeaders,
    },
  };
  return AxiosClient.post(url, data, config);
};
const SysFetch = {
  post,
  get,
  put,
  patch,
  delete: del,
  postWithCustomHeader,
};

export default SysFetch;
