import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import CONST from "./const";
import { toast } from "react-toastify";
const timeout = CONST.REQUEST.TIME_OUT;
let AxiosClient = axios.create({
  baseURL: CONST.URL.API,
  timeout,
  headers: {
    "Content-Type": "application/json",
  },
});

const registerInterceptorsRequest = (clientInstance: AxiosInstance) => {
  clientInstance.interceptors.request.use(
    async (config: any) => {
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );
};
registerInterceptorsRequest(AxiosClient);

const registerInterceptorResponse = (clientInstance: AxiosInstance) => {
  clientInstance.interceptors.response.use(
    async (response: { data: any }) => {
      return response.data || response;
    },
    async (error: any) => {
      if (error?.response?.data) {
        toast.error(error?.response?.data);
      }
      return Promise.reject(error);
    }
  );
};
registerInterceptorResponse(AxiosClient);

const setConfigAxiosClient = (
  accessToken: any,
  clientAxiosInstance: AxiosInstance
) => {
  clientAxiosInstance.defaults.headers.common = {
    "Content-Type": "application/json",
    Authorization: "",
  };
  clientAxiosInstance.defaults.timeout = timeout;
  if (accessToken) {
    clientAxiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }
};

export function setConfigAxios(accessToken: any) {
  setConfigAxiosClient(accessToken, AxiosClient);
}

const post = (url: string, data: any, config = {}) => {
  return AxiosClient.post(url, data, config);
};

const get = (url: string, data: AxiosRequestConfig<any> | undefined) => {
  return AxiosClient.get(url, data);
};

const put = (url: string, data: any, config = {}) => {
  return AxiosClient.put(url, data, config);
};

const patch = (url: string, data: any, config = {}) => {
  return AxiosClient.patch(url, data, config);
};

const del = (url: string, config = {}) => {
  return AxiosClient.delete(url, config);
};

const postWithCustomHeader = (url: string, data: any, customHeaders: any) => {
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
