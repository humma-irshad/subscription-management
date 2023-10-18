import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createAmountCouponModal: false,
  editAmountCouponModal: false,
  deleteAmountCouponModal: false,
};

export const amountCouponSlice = createSlice({
  name: "amountCoupon",
  initialState,
  reducers: {
    showCreateAmountCouponModal(state) {
      state.createAmountCouponModal = !state.createAmountCouponModal;
    },
    showEditAmountCouponModal(state) {
      state.editAmountCouponModal = !state.editAmountCouponModal;
    },
    deleteAmountCouponModal(state) {
      state.deleteAmountCouponModal = !state.deleteAmountCouponModal;
    },
  },
});

export const amountCouponActions = amountCouponSlice.actions;
