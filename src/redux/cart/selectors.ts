import { CartItem } from './types';

export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cartSlice.items.find((obj: CartItem) => obj.id === id);
export const selectCart = (state: RootState) => state.cartSlice;
