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
    if (
      window.location.href.toLowerCase().includes("/login") &&
      !error.request.responseURL.toLowerCase().includes("whoami")
    ) {
      alert("Check your credentials and try again");
    }
    if (!window.location.href.toLowerCase().includes("/login")) {
      window.location.href = "/login";
    }
  }
};

httpClient.interceptors.response.use(
  fulfillResponseInterceptor,
  catchResponseInterceptor
);

export default httpClient;
