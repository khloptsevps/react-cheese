import { configureStore } from '@reduxjs/toolkit';

import productSlice from './slices/productSlice';
import filterSlice from './slices/filterSlice';
import modalSlice from './slices/modalSlice';
import cartSlice from './slices/cartSlice';

const store = configureStore({
  reducer: {
    products: productSlice,
    filter: filterSlice,
    modal: modalSlice,
    cart: cartSlice,
  },
});

export default store;
