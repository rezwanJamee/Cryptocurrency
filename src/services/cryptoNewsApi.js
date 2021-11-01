import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders  = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': process.env.Crypto_News_Host,
    'x-rapidapi-key': process.env.Crypto_News_Api
}

const baseUrl = process.env.Crypto_News_BaseURL;

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
    }),
});
  
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
