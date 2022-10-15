import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import Cookies from 'js-cookie';

import { COOKIE } from '@/enums';
import { history } from '@/router/history';

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
    return config;
  },
);

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error): Promise<AxiosError> => {
    // Do something with response error
    const { status } = error.response;

    if (status !== 401) history.replace(`/${status}`);

    if (status === 401) {
      history.replace('/login');
    }

    return Promise.reject(error);
  },
);

export default instance;
