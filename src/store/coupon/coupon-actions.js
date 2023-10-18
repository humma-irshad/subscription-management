import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const couponApi = createApi({
  reducerPath: "couponApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://qa.samparkme.com/subscription-management/api/coupon/",
  }),
  tagTypes: ["coupons"],
  endpoints: (builder) => ({
    getAllCoupons: builder.query({
      query: () => "all/fetch",
      providesTags: ["coupons"],
    }),

    createCoupon: builder.mutation({
      query: (couponData) => {
        return { url: "insert", method: "POST", body: couponData };
      },
      invalidatesTags: ["coupons"],
    }),

    editCoupon: builder.mutation({
      query: (couponData) => {
        return { url: "update", method: "POST", body: couponData };
      },
      invalidatesTags: ["coupons"],
    }),

    deleteCoupon: builder.mutation({
      query: (couponId) => {
        return { url: "delete", method: "POST", body: { id: couponId } };
      },
      invalidatesTags: ["coupons"],
    }),
  }),
});

export const {
  useGetAllCouponsQuery,
  useCreateCouponMutation,
  useEditCouponMutation,
  useDeleteCouponMutation,
} = couponApi;
