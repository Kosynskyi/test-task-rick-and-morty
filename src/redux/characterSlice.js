import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'helpers/constans';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getAllCharters: builder.query({
      query: (page = 1) => `?page=${page}`,
    }),
    getCharacterByName: builder.query({
      query: (name, page = 1) => `?page=${page}&name=${name}`,
    }),
  }),
});

export const { useGetAllChartersQuery, useGetCharacterByNameQuery } =
  characterApi;
