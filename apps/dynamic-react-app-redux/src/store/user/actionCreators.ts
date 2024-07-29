import AuthService from '@/server/services/auth-service';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export interface authArgs {
  type: 'register';
  username?: string;
  email?: string;
  password?: string;
}
export interface loginArgs {
  type: 'login';
  email?: string;
  password?: string;
}
export interface loginGoogleArgs {
  type: 'loginGoogle';
  username?: string;
  email?: string;
  googlePhotoUrl?: string;
}

export const revertAll = createAction('REVERT_ALL');

export const authorizeUser = createAsyncThunk(
  'v1/users/sign-in',
  async (args: loginArgs, thunkAPI) => {
    try {
      let response;
      if (args.type === 'login') {
        response = await AuthService.login(args.email!, args.password!);
      }
      return response?.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const authorizeGoogleUser = createAsyncThunk(
  'v1/users/auth/google',
  async (args: loginGoogleArgs, thunkAPI) => {
    try {
      let response;
      if (args.type === 'loginGoogle') {
        response = await AuthService.loginGoogle(
          args.username!,
          args.email!,
          args.googlePhotoUrl!,
        );
      }
      return response?.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const registerUser = createAsyncThunk(
  'v1/users/sign-up',
  async (args: authArgs, thunkAPI) => {
    try {
      let response;
      if (args.type === 'register') {
        response = await AuthService.registration(
          args.username!,
          args.email!,
          args.password!,
        );
      }
      return response?.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
