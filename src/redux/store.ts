import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../redux/filter/slice';
import cartSlice from '../redux/cart/slice';
import pizza from '../redux/pizza/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    pizza,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
