import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortId: { 
    name: 'популярности',
    sortProperty: 'rating' 
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
  }, 
});

export const { setCategoryId, setSortId } = filterSlice.actions;
export default filterSlice.reducer;
