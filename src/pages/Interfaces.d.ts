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
}

interface SearchContextInfo {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}


interface PaginationProps {
  onChangePage: (selectedPage: number) => void;
}

interface FilterState {
  categoryId: number;
  sortId: {
    name:string,
    sortProperty: string}
}

interface RootState {
  filterSlice: FilterState;
  // other reducers can be added here
}