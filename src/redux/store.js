import { configureStore } from '@reduxjs/toolkit';

import productSlice from './slices/productSlice';
import filterSlice from './slices/filterSlice';
import modalSlice from './slices/modalSlice';

const store = configureStore({
  reducer: {
    products: productSlice,
    filter: filterSlice,
    modal: modalSlice,
  },
});

export default store;
