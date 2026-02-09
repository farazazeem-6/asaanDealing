import Axios, { AxiosInstance } from 'axios';
import { BASE_URL } from './envConfig';
import { logger } from '@/lib/logger';

export const axios: AxiosInstance = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const responseData = error.response?.data;
    const safeData =
      responseData && typeof responseData === 'object'
        ? {
            message:
              responseData.message ||
              responseData.error ||
              'No specific message',
          }
        : responseData;

    logger.error('❌ API Request Failed', {
      url: error.config?.url,
      method: error.config?.method?.toUpperCase(),
      status: error.response?.status,
      data: safeData,
      message: error.message,
    });

    return Promise.reject(error);
  },
);
