import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createWalletModal: false,
  deleteWalletModal: false,
  editWalletModal: false,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    showCreateWalletModal(state) {
      state.createWalletModal = !state.createWalletModal;
    },
    showEditWalletModal(state) {
      state.editWalletModal = !state.editWalletModal;
    },
    deleteWalletModal(state) {
      state.deleteWalletModal = !state.deleteWalletModal;
    },
  },
});

export const walletActions = walletSlice.actions;
