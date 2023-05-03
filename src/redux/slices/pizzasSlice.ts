import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params: any) => {
  const { order, sortBy, category, search, currentPage } = params;
  const { data } = await axios.get(
    `https:// 6436da148205915d34fe9ac0.mockapi.io/pizzas?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`
  );

  return data;
});

const initialState = {
  items: [],
  status: 'loading', // loading, success, error
};

const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
