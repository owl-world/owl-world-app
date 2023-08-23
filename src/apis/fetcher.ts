import { API_URI } from '@env';
import axios from 'axios';
import store from '@/slices';
import { onLogout } from '@/slices/auth';

export const fetcher = axios.create({
  baseURL: API_URI,
  responseType: 'json',
  withCredentials: true,
});

export const setHeader = (accessToken: string) => {
  fetcher.defaults.headers.common.Authorization = `${accessToken}`;
};

export const deleteHeader = () => {
  fetcher.defaults.headers.common.Authorization = null;
};

fetcher.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

fetcher.interceptors.response.use(
  response => {
    if (!response.data.result) {
      return Promise.reject(response.data);
    }

    return response;
  },
  error => {
    if (error.response.data.errorResponse.code === '401 UNAUTHORIZED') {
      store.dispatch(onLogout());
    }

    return Promise.reject(error);
  }
);
