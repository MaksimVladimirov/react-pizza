export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterState {
  categoryId: number;
  currentPage: number;
  searchValue: string;
  sort: Sort;
}

export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}
