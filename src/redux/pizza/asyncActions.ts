import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchPizzaParams } from './types';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk<PizzaInfo[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get<PizzaInfo[]>(
      `https://6436da148205915d34fe9ac0.mockapi.io/pizzas?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return data;
  }
);
