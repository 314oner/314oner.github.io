import { createSlice } from '@reduxjs/toolkit';

const initialFilter = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

//export const { setFilter } = filterSlice.actions;
//export const filterReducer = filterSlice.reducer;
const { reducer, actions } = filterSlice;

export const { setFilter } = actions;

export default reducer;
