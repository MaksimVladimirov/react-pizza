interface PizzaInfo {
  key: number;
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  type: string;
  count: number;
  rating: number;
}

interface RootState {
  filterSlice: FilterState;
  cartSlice: CartSliceState;
  pizza: PizzasState;
}