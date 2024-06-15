import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: localStorage.getItem('selectedCategory') || null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      localStorage.setItem('selectedCategory', action.payload);
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
