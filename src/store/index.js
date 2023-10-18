import { configureStore } from "@reduxjs/toolkit";

import { customerApi } from "./customer/customer-actions";
import { couponApi } from "./coupon/coupon-actions";
import { customerCouponApi } from "./customerCoupon/customerCoupon-actions";
import { productCouponApi } from "./productCoupon/productCoupon-actions";
import { subscriptionAmountApi } from "./subscriptionAmount/subscriptionAmount-actions";
import { amountCouponApi } from "./amountCoupon/amountCoupon-actions";
import { amountCouponTwoApi } from "./amountCpnTwo/amountCouponTwo-actions";
import { walletApi } from "../store/wallet/wallet-actions";
import { childWalletApi } from "./childWallet/childWallet-actions";

import { customerSlice } from "./customer/customer-slice";
import { couponSlice } from "./coupon/coupon-slice";
import { customerCouponSlice } from "./customerCoupon/customerCoupon-slice";
import { productCouponSlice } from "./productCoupon/productCoupon-slice";
import { subscriptionAmountSlice } from "./subscriptionAmount/subscriptionAmount-slice";
import { amountCouponSlice } from "./amountCoupon/amountCoupon-slice";
import { amountCouponTwoSlice } from "./amountCpnTwo/amountCouponTwo-slice";
import { walletSlice } from "./wallet/wallet-slice";
import { childWalletSlice } from "./childWallet/childWallet-slice";

export const store = configureStore({
  reducer: {
    [customerApi.reducerPath]: customerApi.reducer,
    [couponApi.reducerPath]: couponApi.reducer,
    [productCouponApi.reducerPath]: productCouponApi.reducer,
    [customerCouponApi.reducerPath]: customerCouponApi.reducer,
    [subscriptionAmountApi.reducerPath]: subscriptionAmountApi.reducer,
    [amountCouponApi.reducerPath]: amountCouponApi.reducer,
    [amountCouponTwoApi.reducerPath]: amountCouponTwoApi.reducer,
    [walletApi.reducerPath]: walletApi.reducer,
    [childWalletApi.reducerPath]: childWalletApi.reducer,
    customerReducer: customerSlice.reducer,
    couponReducer: couponSlice.reducer,
    productCouponReducer: productCouponSlice.reducer,
    customerCouponReducer: customerCouponSlice.reducer,
    subscriptionAmountReducer: subscriptionAmountSlice.reducer,
    amountCouponReducer: amountCouponSlice.reducer,
    amountCouponTwoReducer: amountCouponTwoSlice.reducer,
    walletReducer: walletSlice.reducer,
    childWalletReducer: childWalletSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(couponApi.middleware)
      .concat(productCouponApi.middleware)
      .concat(customerCouponApi.middleware)
      .concat(subscriptionAmountApi.middleware)
      .concat(amountCouponApi.middleware)
      .concat(amountCouponTwoApi.middleware)
      .concat(walletApi.middleware)
      .concat(childWalletApi.middleware)
      .concat(customerApi.middleware),
});
