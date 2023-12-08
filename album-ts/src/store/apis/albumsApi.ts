import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../types";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http:localhost:3005",
  }),
  endpoints: (builder) => {
    return {
      getAlbums: builder.query({
        query: (user: User) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const useGetAlbumsQuery = albumsApi.endpoints.getAlbums.useQuery;

export { albumsApi };
