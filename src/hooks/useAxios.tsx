import axiosInstance from '@/config/axios.config';

function useAxios() {
  function Get<T = any>(url: string, params?: any): Promise<T> {
    return axiosInstance.get(`${url}`, { params });
  }

  function Post<T = any>(url: string, body: any, config?: any): Promise<T> {
    return axiosInstance.post(`${url}`, body, config);
  }

  function Put<T = any>(url: string, body: any, params?: any): Promise<T> {
    return axiosInstance.put(`${url}`, body, { params });
  }

  function Delete<T = any>(url: string, params?: any): Promise<T> {
    return axiosInstance.delete(url, params);
  }

  return { Get, Post, Put, Delete };
}

export default useAxios;
