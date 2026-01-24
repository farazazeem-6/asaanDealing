import Axios, { AxiosInstance } from 'axios';
import { BASE_URL } from './envConfig';
import { logger } from '@/utils/helpers';

// 1. AXIOS INSTANCE
export const axios: AxiosInstance = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// 2. RESPONSE INTERCEPTOR
axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    logger.error('API Error', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });
    return Promise.reject(error);
  },
);
