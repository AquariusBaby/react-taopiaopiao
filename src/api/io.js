import Axios from "axios";
import GConfig from "../config";

// Axios.defaults.headers.common[''] = ''
const requestDefaultConfig = {
  // baseURL: '',
  // `headers` 是即将被发送的自定义请求头
  headers: {},
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 3000,
};

let customAxios = Axios.create(requestDefaultConfig);

// 添加请求拦截器
customAxios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    if (config.data) {
      for (let key in config.data) {
        if (
          config.data[key] === null ||
          config.data[key] === "null" ||
          config.data[key] === undefined ||
          config.data[key] === "" ||
          config.data[key] === "undefined"
        ) {
          delete config.data[key];
        }
      }
    }

    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
customAxios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // response = response.data;
    return response.data;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

function transformAxios(config) {
  if (GConfig.isTest || sessionStorage.isTest) {
    config.url = config.testUrl;
  }
  return customAxios(config);
}
export default transformAxios;
