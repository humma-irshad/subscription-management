import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const childWalletApi = createApi({
  reducerPath: "childWalletApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "http://qa.samparkme.com/subscription-management/api/child/wallets/",
  }),
  tagTypes: ["childWallet"],
  endpoints: (builder) => ({
    getChildWallets: builder.query({
      query: () => "all/fetch",
      providesTags: ["childWallet"],
    }),

    createChildWallet: builder.mutation({
      query: (childWalletData) => {
        return { url: "insert", method: "POST", body: childWalletData };
      },
      invalidatesTags: ["childWallet"],
    }),

    editChildWallet: builder.mutation({
      query: (childWalletData) => {
        return { url: "update", method: "POST", body: childWalletData };
      },
      invalidatesTags: ["childWallet"],
    }),

    deleteChildWallet: builder.mutation({
      query: (walletId) => {
        return { url: "delete", method: "POST", body: { id: walletId } };
      },
      invalidatesTags: ["childWallet"],
    }),
  }),
});

export const {
  useGetChildWalletsQuery,
  useCreateChildWalletMutation,
  useEditChildWalletMutation,
  useDeleteChildWalletMutation,
} = childWalletApi;
