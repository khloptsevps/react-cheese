import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';

import db from '../../firebase-config';
import firebaseDocsToArray from '../../utils';

const productsCollection = collection(db, 'products');

export const fetchAllProducts = createAsyncThunk(
  'productSlice/fetchAllProducts',
  async () => {
    const productsSnapshot = await getDocs(productsCollection);
    const products = firebaseDocsToArray(productsSnapshot);
    return products;
  },
);

const initialState = {
  items: [],
  process: 'loading', // filed | success
};

const productSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllProducts.pending]: (state) => {
      const newState = { ...state, process: 'loading', items: [] };
      return newState;
    },
    [fetchAllProducts.fulfilled]: (state, { payload }) => {
      const newState = { ...state, process: 'success', items: payload };
      return newState;
    },
    [fetchAllProducts.rejected]: (state) => {
      const newState = { ...state, process: 'filed', items: [] };
      return newState;
    },
  },
});

export const selectProducts = (state) => state.products;
// export const {} = productSlice.actions;

export default productSlice.reducer;
