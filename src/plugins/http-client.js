import axios from "axios";
import AuthService from "@/plugins/auth-service";

const httpClient = axios.create({
  baseURL: "http://localhost:3000",
});
const authInterceptor = (config) => {
  if (AuthService.hasToken()) {
    config.headers.Authorization = `Bearer ${AuthService.getToken()}`;
  }
  return config;
};

const fulfillResponseInterceptor = (response) => Promise.resolve(response);

const catchResponseInterceptor = (error) => {
  if (error?.response?.status === 401) {
    AuthService.logout();
  }
  throw error;
};

httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.response.use(
  fulfillResponseInterceptor,
  catchResponseInterceptor
);

export default httpClient;
