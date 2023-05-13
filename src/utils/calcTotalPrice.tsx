import { CartItem } from '../redux/cart/types';

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((acc, obj) => (acc += obj.price * obj.count), 0);
};
