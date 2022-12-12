import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // default sort order
  sort: {
    id: 1,
    sortBy: 'price',
    order: 'asc',
  },
};

const filter = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSort(state, { payload }) {
      return { ...state, sort: payload };
    },
  },
});

export const selectFilter = (state) => state.filter;

export const { setSort } = filter.actions;
export default filter.reducer;
