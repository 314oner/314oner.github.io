//@ts-nocheck
import ProductsService from '@/server/services/todos-service';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type State = {
  todos: [];
  loading: boolean;
  error: string;
};
const initialTodos: State = {
  todos: [],
  loading: false,
  error: '',
};
export const getProducts = createAsyncThunk(
  'categories/fetchProducts',
  async (args, thunkAPI) => {
    try {
      const response = await ProductsService.getProducts();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
const todosSlice = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.store.push(action.payload);
      },
      prepare({
        text,
        completed,
        title,
      }: {
        //text: any;
        completed: any;
        title: any;
      }) {
        return {
          payload: {
            id: Date.now(),
            //text,
            completed,
            title,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.todos.findIndex((e: any) => e.id === action.payload);
      state.todos.splice(index, 1);
    },
    editContact(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
      }
    },
    completeContact(state, action) {
      state.todos.map((todo) => {
        return todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    },
  },
  extraReducers: {
    [getProducts.pending.type]: (state: State, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled.type]: (
      state: State,
      action: PayloadAction<any>,
    ) => {
      state.loading = false;
      state.error = '';
      state.todos = action.payload;
    },
    [getProducts.rejected.type]: (state: State, action: PayloadAction<any>) => {
      state.loading = false;
      state.todos = [];
      state.error = '';
    },
  },
});

const { reducer, actions } = todosSlice;

export const {
  /*
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  clearAllTodos,
  clearCompleted,
  */
  addContact,
  deleteContact,
  editContact,
  completeContact,
} = actions;

export default reducer;
