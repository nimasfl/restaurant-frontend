import axios from "axios";
import * as https from "https";

const httpClient = axios.create({
  baseURL: "https://localhost:5000",
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  withCredentials: true,
});

const fulfillResponseInterceptor = (response) => Promise.resolve(response.data);

const catchResponseInterceptor = (error) => {
  if (error?.response?.status === 401) {
    window.location.href = "/login";
  }
  throw error;
};

httpClient.interceptors.response.use(
  fulfillResponseInterceptor,
  catchResponseInterceptor
);

export default httpClient;
