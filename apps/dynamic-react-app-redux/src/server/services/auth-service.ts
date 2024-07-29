import { AxiosResponse } from 'axios';
import api from '../helper/axiosCreate';

export default class AuthService {
  static async login(
    email: string,
    password: string,
  ): Promise<AxiosResponse<Auth.AuthResponse>> {
    return api.post<Auth.AuthResponse>('/v1/users/sign-in', {
      email,
      password,
    });
  }
  static async loginGoogle(
    username: string,
    email: string,
    googlePhotoUrl: string,
  ): Promise<AxiosResponse<Auth.AuthResponse>> {
    return api.post<Auth.AuthResponse>('/v1/users/auth/google', {
      username,
      email,
      googlePhotoUrl,
    });
  }
  static async registration(
    username: string,
    email: string,
    password: string,
  ): Promise<AxiosResponse<Auth.LoginResponse>> {
    return api.post<Auth.LoginResponse>('/v1/users/sign-up', {
      username,
      email,
      password,
    });
  }
}
