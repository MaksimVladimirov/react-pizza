import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sortId: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};


const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortId(state, action) {
      state.sortId = action.payload;
    },
    setCurrentPageCount(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = action.payload.currentPage;
      state.sortId = action.payload.sort;
      state.categoryId = action.payload.categoryId;
    }
  },
});

export const { setCategoryId, setSortId, setCurrentPageCount, setFilters } = filterSlice.actions;
export default filterSlice.reducer;
