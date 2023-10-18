import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productCouponApi = createApi({
  reducerPath: "productCouponApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "http://qa.samparkme.com/subscription-management/api/product/coupon/",
  }),
  tagTypes: ["productCoupons"],
  endpoints: (builder) => ({
    getAllProductCoupons: builder.query({
      query: () => "all/fetch",
      providesTags: ["productCoupons"],
    }),
    createProductCoupon: builder.mutation({
      query: (productCouponData) => {
        return { url: "insert", method: "POST", body: productCouponData };
      },
      invalidatesTags: ["productCoupons"],
    }),
    editProductCoupon: builder.mutation({
      query: (productCouponData) => {
        return { url: "update", method: "POST", body: productCouponData };
      },
      invalidatesTags: ["productCoupons"],
    }),
    deleteProductCoupon: builder.mutation({
      query: (productCouponId) => {
        return { url: "delete", method: "POST", body: { id: productCouponId } };
      },
      invalidatesTags: ["productCoupons"],
    }),
  }),
});

export const {
  useGetAllProductCouponsQuery,
  useCreateProductCouponMutation,
  useEditProductCouponMutation,
  useDeleteProductCouponMutation,
} = productCouponApi;
