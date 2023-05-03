interface SearchProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

interface SortTypeInfo {
  name: string;
  sortProperty: string;
}

interface PizzaInfo {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  type: string;
  count: number;
}

interface SearchContextInfo {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

interface PaginationProps {
  onChangePage: (selectedPage: number) => void;
  currentPage: number;
}

interface FilterState {
  categoryId: number;
  currentPage: number;
  sortId: {
    name: string;
    sortProperty: string;
  };
}

interface PizzasState {
  items: [];
}

interface CartState {
  cartSlice: {
    items: CartItemInfo[];
    count: number;
  };
  totalPrice: number;
}

interface RootState {
  filterSlice: FilterState;
  cartSlice: CartState;
  pizza: PizzasState;
}

interface SyntheticEvent {
  bubbles: boolean;
  cancelable: boolean;
  currentTarget: EventTarget;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  nativeEvent: Event;
  preventDefault(): void;
  stopPropagation(): void;
  target: EventTarget;
  timeStamp: Date;
  type: string;
}

interface MouseEvent {
  composedPath: () => any[];
}

interface CartItemInfo {
  id: number;
  price: number;
  count: number;
}
