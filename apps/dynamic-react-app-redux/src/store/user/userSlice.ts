import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authorizeUser } from './actionCreators';

export interface State {
  currentUser: any;
  loading: any;
  error: any;
}

const initialState: State = {
  currentUser: null,
  //currentUser: {} as Users.IUser,
  error: null,
  loading: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    uploadUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOutUserStart: (state) => {
      state.loading = true;
    },
    signOutUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    reset(state: State) {
      Object.assign(state, initialState);
    },
  },
  extraReducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [authorizeUser.pending.type]: (state: State, action) => {
      state.error = '';
      state.loading = true;
    },
    [authorizeUser.fulfilled.type]: (
      state: State,
      action: PayloadAction<Auth.AuthResponse>,
    ) => {
      localStorage.setItem('token', action.payload.data.token);
      state.loading = false;
      state.currentUser = action.payload.data.user;
      state.error = '';
    },
    [authorizeUser.rejected.type]: (
      state: State,
      action: PayloadAction<any>,
    ) => {
      const error = action.payload;
      if (error.response) {
        if (Array.isArray(error.response.data.message)) {
          state.error = error.response.data.message[0];
        } else {
          state.error = error.response.data.message;
        }
      }
      state.loading = false;
    },
  },
});

const { reducer, actions } = userSlice;

export const {
  signInUserStart,
  signInUserSuccess,
  signInUserFailure,
  uploadUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
  reset,
} = actions;

export default reducer;
