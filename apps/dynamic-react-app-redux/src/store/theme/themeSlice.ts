import { createSlice } from '@reduxjs/toolkit';

type State = {
  theme: string;
};

const initialState: State = {
  theme: 'light',
};
const userSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

const { reducer, actions } = userSlice;

export const { toggleTheme } = actions;

export default reducer;
