import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AlbumData, User } from "../../types";
import { pause } from "../../util";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args) => {
      console.log("here");
      await pause(5000);
      console.log("here 2");
      return fetch(...args);
    },
  }),
  endpoints: (builder) => {
    return {
      createAlbum: builder.mutation<AlbumData, User>({
        query: (user: User) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "POST",
          };
        },
      }),
      getAlbums: builder.query<AlbumData[], User>({
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
export const useCreateAlbumMutation =
  albumsApi.endpoints.createAlbum.useMutation;
export { albumsApi };
