import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createCustomerModal: false,
  deleteCustomerModal: false,
  editCustomerModal: false,
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    showCreateCustomerModal(state) {
      state.createCustomerModal = !state.createCustomerModal;
    },
    showEditCouponModal(state) {
      state.editCustomerModal = !state.editCustomerModal;
    },
    deleteCustomerModal(state) {
      state.deleteCustomerModal = !state.deleteCustomerModal;
    },
  },
});

export const customerActions = customerSlice.actions;
