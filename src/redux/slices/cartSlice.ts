import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  count: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj: CartItemInfo) => obj.id === action.payload.id);
      if (findItem) {
        // @ts-ignore
        findItem.count++;
      } else {
        // @ts-ignore
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((acc, obj: CartItemInfo) => {
        return (acc += obj.price * obj.count);
      }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((object: CartItemInfo) => object.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj: CartItemInfo) => obj.id === action.payload);
      if (findItem) {
        // @ts-ignore
        findItem.count--;
      }
    },
  },
});

export const selectCartItemById = (id: number) => (state: CartState)  =>
  state.cartSlice.items.find((obj: CartItemInfo) => obj.id === id);
export const selectCart = (state: any) => state.cartSlice;
export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
