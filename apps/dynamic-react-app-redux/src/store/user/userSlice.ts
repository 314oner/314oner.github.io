import { createSlice } from '@reduxjs/toolkit';

type State = { currentUser: any; loading: any; error: any };

const initialState: State = {
  currentUser: null,
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
} = actions;

export default reducer;
