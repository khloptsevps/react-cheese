import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

import db from '../../firebase-config';
import firebaseDocsToObjects from '../../utils';

const productsCollection = collection(db, 'products');

export const fetchProducts = createAsyncThunk(
  'productSlice/fetchProducts',
  async ({ sortBy, order }) => {
    try {
      const request = query(productsCollection, orderBy(sortBy, order));
      const productsSnapshot = await getDocs(request);
      const products = firebaseDocsToObjects(productsSnapshot, sortBy, order);
      return products;
    } catch (error) {
      // TODO: handle error
      console.log(error);
      return [];
    }
  },
);

const initialState = {
  items: [],
  process: 'loading', // failed | success
};

const productSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      const newState = { ...state, process: 'loading', items: [] };
      return newState;
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      const newState = { ...state, process: 'success', items: payload };
      return newState;
    },
    [fetchProducts.rejected]: (state) => {
      const newState = { ...state, process: 'failed', items: [] };
      return newState;
    },
  },
});

export const selectProducts = (state) => state.products;
// export const {} = productSlice.actions;

export default productSlice.reducer;
