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
    resetCart: () => ({ totalPrice: 0, items: [] }),
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
    removeItemOne: (state, { payload }) => {
      const { items } = state;
      const findItem = items.find((item) => item.id === payload.id);
      findItem.count -= 1;
      state.totalPrice = items.reduce(
        (acc, item) => acc + item.count * item.price,
        0,
      );
    },
    removeItem: (state, { payload }) => {
      const newItems = state.items.filter(({ id }) => id !== payload.id);
      const newTotalPrice = newItems.reduce(
        (acc, item) => acc + item.count * item.price,
        0,
      );
      return { totalPrice: newTotalPrice, items: newItems };
    },
  },
});

export const { addItem, removeItemOne, resetCart, removeItem } =
  cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
