import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://databaseswap.mangasocial.online",
});

// Interceptor example: Add a request interceptor
customAxios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Interceptor example: Add a response interceptor
customAxios.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response.data;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);
export default customAxios;
