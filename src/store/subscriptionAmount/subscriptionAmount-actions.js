import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const subscriptionAmountApi = createApi({
  reducerPath: "subscriptionAmountApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "http://qa.samparkme.com/subscription-management/api/subscription/coupon/",
  }),
  tagTypes: ["subscriptionAmouunt"],
  endpoints: (builder) => ({
    getAllSubscriptionAmount: builder.query({
      query: () => "all/fetch",
      providesTags: ["subscriptionAmount"],
    }),

    createSubscriptionAmount: builder.mutation({
      query: (subscriptionAmountData) => {
        return { url: "insert", method: "POST", body: subscriptionAmountData };
      },
      invalidatesTags: ["subscriptionAmount"],
    }),

    editSubscriptionAmount: builder.mutation({
      query: (subscriptionAmountData) => {
        return { url: "update", method: "POST", body: subscriptionAmountData };
      },
      invalidatesTags: ["subscriptionAmount"],
    }),

    deleteSubscriptionAmount: builder.mutation({
      query: (subscriptionAmountId) => {
        return {
          url: "delete",
          method: "POST",
          body: { id: subscriptionAmountId },
        };
      },
      invalidatesTags: ["subscriptionAmount"],
    }),
  }),
});

export const {
  useGetAllSubscriptionAmountQuery,
  useCreateSubscriptionAmountMutation,
  useEditSubscriptionAmountMutation,
  useDeleteSubscriptionAmountMutation,
} = subscriptionAmountApi;
