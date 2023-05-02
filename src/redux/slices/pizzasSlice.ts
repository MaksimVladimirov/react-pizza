import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params: any) => {
  const { order, sortBy, category, search, currentPage } = params;
  const { data } = await axios.get(
    `https://6436da148205915d34fe9ac0.mockapi.io/pizzas?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`
  );

  return data;
});

const initialState = {
  items: [],
};

const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchUserById.fullfilled]: (state, action) => {
      console.log(state)
    }
  }
});

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
