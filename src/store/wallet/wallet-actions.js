import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const walletApi = createApi({
  reducerPath: "walletApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "http://qa.samparkme.com/subscription-management/api/master/wallets/",
  }),
  tagTypes: ["wallet"],
  endpoints: (builder) => ({
    getWallets: builder.query({
      query: () => "all/fetch",
      providesTags: ["wallet"],
    }),

    createWallet: builder.mutation({
      query: (walletData) => {
        return { url: "insert", method: "POST", body: walletData };
      },
      invalidatesTags: ["wallet"],
    }),

    editWallet: builder.mutation({
      query: (walletData) => {
        return { url: "update", method: "POST", body: walletData };
      },
      invalidatesTags: ["wallet"],
    }),

    deleteWallet: builder.mutation({
      query: (walletId) => {
        return { url: "delete", method: "POST", body: { id: walletId } };
      },
      invalidatesTags: ["wallet"],
    }),
  }),
});

export const {
  useGetWalletsQuery,
  useCreateWalletMutation,
  useEditWalletMutation,
  useDeleteWalletMutation,
} = walletApi;
