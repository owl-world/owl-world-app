import { API_URI } from '@env';
import axios from 'axios';

export const fetcher = axios.create({
  baseURL: API_URI,
  responseType: 'json',
  withCredentials: true,
});

export const setHeader = (accessToken: string) => {
  fetcher.defaults.headers.common.Authorization = `${accessToken}`;
};

export const deleteHeader = () => {
  fetcher.defaults.headers.common.Authorization = '';
};
