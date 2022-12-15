import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  id: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, { payload }) {
      const newState = { ...state, isOpen: true, id: payload.id };
      return newState;
    },
    closeModal(state) {
      return { ...state, isOpen: false };
    },
  },
});

export const selectModal = (state) => state.modal;

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
