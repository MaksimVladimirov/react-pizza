import { CartItem } from '../redux/slices/cartSlice';

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((acc, obj) => (acc += obj.price * obj.count), 0);
};
