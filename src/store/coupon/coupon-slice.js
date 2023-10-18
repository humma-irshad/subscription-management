import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createCouponModal: false,
  deleteCouponModal: false,
  editCouponModal: false,
};

export const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    showCreateCouponModal(state) {
      state.createCouponModal = !state.createCouponModal;
    },
    showEditCouponModal(state) {
      state.editCouponModal = !state.editCouponModal;
    },
    deleteCouponModal(state) {
      state.deleteCouponModal = !state.deleteCouponModal;
    },
  },
});

export const couponActions = couponSlice.actions;
