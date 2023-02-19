import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "34e8ae888fmsh6db4cb6a949b39ep1c4719jsne5504c8478cd"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTracks: builder.query({ query: () => "/charts/track" }),
    getSongsByGenre: builder.query({ query: () => `charts/list` }),
    getSongDetails: builder.query({ query: ({ songid }) => `/songs/get-details?key=${songid}&locale=en-US` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/songs/list-recommendations?key=484129036&locale=en-US` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/get-details?id=${artistId}&l=en-US'` }),
    getArtistTopSongs: builder.query({ query: (artistId) => `/artists/get-top-songs?id=${artistId}&l=en-US` }),
    getCountrySongs: builder.query({ query: (country) => `charts/list?country_code=${country}` }),
    getCountryList: builder.query({query: (listId)=>`charts/track?listId=${listId}`}),
    getSearch: builder.query({query: (searchTerm)=>`/search?term=${searchTerm}`}),
  }),
});


export const {
  useGetTracksQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetArtistTopSongsQuery,
  useGetCountrySongsQuery,
  useGetCountryListQuery,
  useGetSongsByGenreQuery,
  useGetSearchQuery,
} = shazamCoreApi;