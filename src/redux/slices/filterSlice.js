import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // default sort order
  sort: {
    id: 1,
    sortBy: 'price',
    order: 'asc',
  },
  // default search value
  search: '',
};

const filter = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSort(state, { payload }) {
      return { ...state, sort: payload };
    },
    setSearch(state, { payload }) {
      const normalizedPayload = payload.toLowerCase();
      return { ...state, search: normalizedPayload };
    },
  },
});

export const selectFilter = (state) => state.filter;

export const { setSort, setSearch } = filter.actions;
export default filter.reducer;
