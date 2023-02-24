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
  fetcher.defaults.headers.common.Authorization = '';
};

fetcher.interceptors.request.use(
  request => {
    // 응답 데이터를 가공
    // ...
    console.log(`[${request.method}][Axios request url]`);
    console.log(request.url);
    console.log(request.data);
    // consxole.log('\n');
    console.log(request.headers);
    // console.log('yo sb?');

    return request;
  },
  error => {
    // 오류 응답을 처리
    console.error('[Axios request error]');
    // console.error(error.response.data);

    return Promise.reject(error);
  }
);

fetcher.interceptors.response.use(
  response => {
    // 응답 데이터를 가공
    // …
    console.log(`[${response.status}][Axios response data]`);
    console.log(JSON.stringify(response.data));

    if (!response.data.result) {
      // return new Promise(() => {});
      return Promise.reject(response.data);
    }

    return response;
  },
  error => {
    // 오류 응답을 처리
    // console.log('[Axios response error]');

    console.log('error');

    if (error.response.data.errorResponse.code === '401 UNAUTHORIZED') {
      store.dispatch(onLogout());
    }

    return Promise.reject(error);
  }
);
