import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const amountCouponApi = createApi({
  reducerPath: "amountCouponApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "http://qa.samparkme.com/subscription-management/api/amountcoupon/",
  }),
  tagTypes: ["amountCoupons"],
  endpoints: (builder) => ({
    getAllAmountCoupons: builder.query({
      query: () => "all/fetch",
      providesTags: ["amountCoupons"],
    }),

    createAmountCoupon: builder.mutation({
      query: (amountCouponData) => {
        console.log(amountCouponData);
        return { url: "insert", method: "POST", body: amountCouponData };
      },
      invalidatesTags: ["amountCoupons"],
    }),

    editAmountCoupon: builder.mutation({
      query: (amountCouponData) => {
        return { url: "update", method: "POST", body: amountCouponData };
      },
      invalidatesTags: ["amountCoupons"],
    }),

    deleteAmountCoupon: builder.mutation({
      query: (amountCouponId) => {
        return { url: "delete", method: "POST", body: { id: amountCouponId } };
      },
      invalidatesTags: ["amountCoupons"],
    }),
  }),
});

export const {
  useGetAllAmountCouponsQuery,
  useCreateAmountCouponMutation,
  useEditAmountCouponMutation,
  useDeleteAmountCouponMutation,
} = amountCouponApi;
