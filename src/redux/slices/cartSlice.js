/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const { items } = state;
      const findItem = items.find((item) => item.id === payload.id);
      if (!findItem) {
        items.push({ ...payload, count: 1 });
      } else {
        findItem.count += 1;
      }
      state.totalPrice = items.reduce(
        (acc, item) => acc + item.count * item.price,
        0,
      );
    },
  },
});

export const { addItem } = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
