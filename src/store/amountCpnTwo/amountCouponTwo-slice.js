import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createAmountCouponTwoModal: false,
  editAmountCouponTwoModal: false,
  deleteAmountCouponTwoModal: false,
};

export const amountCouponTwoSlice = createSlice({
  name: "amountCouponTwo",
  initialState,
  reducers: {
    showCreateAmountCouponTwoModal(state) {
      state.createAmountCouponTwoModal = !state.createAmountCouponTwoModal;
    },
    showEditAmountCouponTwoModal(state) {
      state.editAmountCouponTwoModal = !state.editAmountCouponTwoModal;
    },
    deleteAmountCouponTwoModal(state) {
      state.deleteAmountCouponTwoModal = !state.deleteAmountCouponTwoModal;
    },
  },
});

export const amountCouponTwoActions = amountCouponTwoSlice.actions;
