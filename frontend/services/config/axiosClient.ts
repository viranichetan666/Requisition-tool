import axios from "axios";

const axiosClient = axios.create({ baseURL: "/" });

let token = "";

axiosClient.interceptors.request.use(async (request) => {
  if (!token.length) {
    token = "";
  }
  request.headers.token = token;
  return request;
});

axiosClient.interceptors.response.use(
  (response) => {
    // Response with 2xx status code lies here
    return response.data;
  },
  (error) => {
    // Error handling goes here...
    return Promise.reject(error);
  }
);

export default axiosClient;
