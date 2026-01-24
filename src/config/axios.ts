import Axios, { AxiosInstance } from 'axios';
import { BASE_URL } from './envConfig';
import { logger } from '@/lib/logger.client';

export const axios: AxiosInstance = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    logger.error({
      msg: 'API Request Failed',
      url: error.config?.url,
      status: error.response?.status,
      params: error.config?.params,
      error: error.message,
    });

    return Promise.reject(error);
  },
);
