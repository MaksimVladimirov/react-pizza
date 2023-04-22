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

interface SearchContextType {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}
