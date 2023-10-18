import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createChildWalletModal: false,
  deleteChildWalletModal: false,
  editChildWalletModal: false,
};

export const childWalletSlice = createSlice({
  name: "childWallet",
  initialState,
  reducers: {
    showCreateChildWalletModal(state) {
      state.createChildWalletModal = !state.createChildWalletModal;
    },
    showEditChildWalletModal(state) {
      state.editChildWalletModal = !state.editChildWalletModal;
    },
    deleteChildWalletModal(state) {
      state.deleteChildWalletModal = !state.deleteChildWalletModal;
    },
  },
});

export const childWalletActions = childWalletSlice.actions;
