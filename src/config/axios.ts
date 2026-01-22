import Axios, { AxiosInstance } from 'axios';
import { BASE_URL } from './envConfig';

// 1. AXIOS INSTANCE
export const axios: AxiosInstance = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'ngrok-skip-browser-warning': true,
  },
});

// 2. RESPONSE INTERCEPTOR
axios.interceptors.response.use(
  (response) => {
    // Get the useful data from the whole data that come from server
    return response.data;
  },
  (error) => {
    // if there is a problem (for example no internet or  404 error)
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  },
);
