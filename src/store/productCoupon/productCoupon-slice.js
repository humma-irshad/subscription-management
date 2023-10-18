import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createProductCouponModal: false,
  deleteProductCouponModal: false,
  editProductCouponModal: false,
};

export const productCouponSlice = createSlice({
  name: "productCoupon",
  initialState,
  reducers: {
    showCreateProductCouponModal(state) {
      state.createProductCouponModal = !state.createProductCouponModal;
    },
    showEditProductCouponModal(state) {
      state.editProductCouponModal = !state.editProductCouponModal;
    },
    deleteProductCouponModal(state) {
      state.deleteProductCouponModal = !state.deleteProductCouponModal;
    },
  },
});

export const productCouponActions = productCouponSlice.actions;
