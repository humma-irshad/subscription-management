import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createCustomerCouponModal: false,
  deleteCustomerCouponModal: false,
  editCustomerCouponModal: false,
};

export const customerCouponSlice = createSlice({
  name: "customerCoupon",
  initialState,
  reducers: {
    showCreateCustomerModal(state) {
      state.createCustomerCouponModal = !state.createCustomerCouponModal;
    },
    showEditCustomerCouponModal(state) {
      state.editCustomerCouponModal = !state.editCustomerCouponModal;
    },
    deleteCustomerCouponModal(state) {
      state.deleteCustomerCouponModal = !state.deleteCustomerCouponModal;
    },
  },
});

export const customerCouponActions = customerCouponSlice.actions;
