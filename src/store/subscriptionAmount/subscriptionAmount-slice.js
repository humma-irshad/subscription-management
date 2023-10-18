import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createSubscriptionAmountModal: false,
  editSubscriptionAmountModal: false,
  deleteSubscriptionAmountModal: false,
};

export const subscriptionAmountSlice = createSlice({
  name: "subscriptionAmount",
  initialState,
  reducers: {
    showCreateSubscriptionAmountModal(state) {
      state.createSubscriptionAmountModal =
        !state.createSubscriptionAmountModal;
    },
    showEditSubscriptionAmountModal(state) {
      state.editSubscriptionAmountModal = !state.editSubscriptionAmountModal;
    },
    deleteSubscriptionAmountModal(state) {
      state.deleteSubscriptionAmountModal =
        !state.deleteSubscriptionAmountModal;
    },
  },
});

export const subscriptionAmountActions = subscriptionAmountSlice.actions;
