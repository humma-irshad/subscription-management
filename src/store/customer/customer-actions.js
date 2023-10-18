import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://qa.samparkme.com/subscription-management/api/customer/",
  }),
  tagTypes: ["customers"],
  endpoints: (builder) => ({
    getAllCustomers: builder.query({
      query: () => "all/fetch",
      providesTags: ["customers"],
    }),

    createCustomer: builder.mutation({
      query: (customerData) => {
        return { url: "insert", method: "POST", body: customerData };
      },
      invalidatesTags: ["customers"],
    }),

    editCustomer: builder.mutation({
      query: (customerData) => {
        return { url: "update", method: "POST", body: customerData };
      },
      invalidatesTags: ["customers"],
    }),

    deleteCustomer: builder.mutation({
      query: (customerId) => {
        return { url: "delete", method: "POST", body: { id: customerId } };
      },
      invalidatesTags: ["customers"],
    }),
  }),
});

export const {
  useGetAllCustomersQuery,
  useCreateCustomerMutation,
  useEditCustomerMutation,
  useDeleteCustomerMutation,
} = customerApi;
