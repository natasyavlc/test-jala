import axios from 'axios';

const fetchAPI = baseURL => {
  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.request.use(
    config => {
      // You can modify the request config here (e.g., adding headers)
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    response => {
      // You can modify the response data here before it's passed to the caller
      return response;
    },
    error => {
      // You can handle errors globally here
      return Promise.reject(error);
    },
  );

  return instance;
};

export default fetchAPI;
