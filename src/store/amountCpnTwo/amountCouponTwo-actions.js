import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const amountCouponTwoApi = createApi({
  reducerPath: "amountCouponTwoApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "http://qa.samparkme.com/subscription-management/api/amountcoupon/sec/",
  }),
  tagTypes: ["amountCouponsTwo"],
  endpoints: (builder) => ({
    getAllAmountCouponsTwo: builder.query({
      query: () => "all/fetch",
      providesTags: ["amountCouponsTwo"],
    }),

    createAmountCouponTwo: builder.mutation({
      query: (amountCouponTwoData) => {
        return { url: "insert", method: "POST", body: amountCouponTwoData };
      },
      invalidatesTags: ["amountCouponsTwo"],
    }),

    editAmountCouponTwo: builder.mutation({
      query: (amountCouponTwoData) => {
        return { url: "update", method: "POST", body: amountCouponTwoData };
      },
      invalidatesTags: ["amountCouponsTwo"],
    }),

    deleteAmountCouponTwo: builder.mutation({
      query: (amountCouponTwoId) => {
        return { url: "delete", method: "POST", body: { id: amountCouponTwoId } };
      },
      invalidatesTags: ["amountCouponsTwo"],
    }),
  }),
});

export const {
  useGetAllAmountCouponsTwoQuery,
  useCreateAmountCouponTwoMutation,
  useEditAmountCouponTwoMutation,
  useDeleteAmountCouponTwoMutation,
} = amountCouponTwoApi;
