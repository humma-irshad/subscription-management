import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customerCouponApi = createApi({
  reducerPath: "customerCoupon",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "http://qa.samparkme.com/subscription-management/api/customercoupon/",
  }),
  tagTypes: ["customerCoupons"],
  endpoints: (builder) => ({
    getAllCustomerCoupons: builder.query({
      query: () => "all/fetch",
      providesTags: ["customerCoupons"],
    }),

    createCustomerCoupon: builder.mutation({
      query: (customerCouponData) => {
        return { url: "insert", method: "POST", body: customerCouponData };
      },
      invalidatesTags: ["customerCoupons"],
    }),

    editCustomerCoupon: builder.mutation({
      query: (customerCouponData) => {
        return { url: "update", method: "POST", body: customerCouponData };
      },
      invalidatesTags: ["customerCoupons"],
    }),

    deleteCustomerCoupon: builder.mutation({
      query: (customerCouponId) => {
        return {
          url: "delete",
          method: "POST",
          body: { id: customerCouponId },
        };
      },
      invalidatesTags: ["customerCoupons"],
    }),
  }),
});

export const {
  useGetAllCustomerCouponsQuery,
  useCreateCustomerCouponMutation,
  useEditCustomerCouponMutation,
  useDeleteCustomerCouponMutation,
} = customerCouponApi;
