import Axios from "axios";

export function getCookie(cname: string): string {
  const name = cname + "=";
  const ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export const AxiosInstance = Axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
    "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
    "Access-Control-Allow-Origin": "http://localhost:3000",
    // "Access-Control-Allow-Credentials": "true",
  },
  // withCredentials: true,

  // false if access-control-allow-origin is set
  withCredentials: false,
});

AxiosInstance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
AxiosInstance.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  },
);
