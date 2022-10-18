import { message as $message } from 'antd';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { includes } from 'lodash';

import { COOKIE } from '@/enums';
import { history } from '@/router/history';
import stores from '@/stores';
import { setLoadingState } from '@/stores/modules/global.store';

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_AXIOS_BASE_URL,
  headers: {
    Accept: 'application/json',
    ContentType: 'application/json;charset=UTF-8',
  },
});

// Interceptors
instance.interceptors.request.use(
  (config: AxiosRequestConfig | any): AxiosRequestConfig => {
    const hasToken = Cookies.get(COOKIE.Name);

    if (hasToken) config.headers['Authorization'] = `Bearer ${hasToken}`;

    // turn on loading spinner
    stores.dispatch(setLoadingState(true));

    return config;
  },
  (error): Promise<AxiosError> => {
    // turn on loading spinner
    stores.dispatch(setLoadingState(false));

    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    stores.dispatch(setLoadingState(false));
    return response;
  },
  async (error): Promise<AxiosError> => {
    // turn off loading spinner
    stores.dispatch(setLoadingState(false));
    // Do something with response error
    const { status, data } = error.response;

    if (status === 401) {
      history.replace('/login');
    }

    if (includes([403, 404, 500], status)) history.replace(`/${status}`);

    let errorMessage: string;

    if (error?.message?.includes('Network Error')) {
      errorMessage = 'Network error, please check your network';
    } else {
      errorMessage = data?.message;
    }

    $message.error(errorMessage);

    return Promise.reject(error);
  }
);

export default instance;
