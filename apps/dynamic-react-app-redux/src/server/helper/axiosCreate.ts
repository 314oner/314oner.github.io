import axios from 'axios';
import { basePath } from '../config/servicePath';

//export const API_URL = "https://dynamic-react-app-redux.herokuapp.com";

const axiosCreate = axios.create({
  withCredentials: true,
  baseURL: basePath,
});

axiosCreate.interceptors.request.use((config) => {
  // @ts-ignore
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

axiosCreate.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<Auth.AuthResponse>(
          `${basePath}/auth/refresh`,
          { withCredentials: true },
        );
        //localStorage.setItem('token', response.data.data.token); TODO: дописать логику обновления
        return axiosCreate.request(originalRequest);
      } catch (e) {
        console.log('Unauthorized');
      }
    }
    throw error;
  },
);

export default axiosCreate;
