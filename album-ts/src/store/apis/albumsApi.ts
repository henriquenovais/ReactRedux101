import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AlbumData, User } from "../../types";
import { pause } from "../../util";
import { faker } from "@faker-js/faker";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args) => {
      await pause(3000);

      return fetch(...args);
    },
  }),
  endpoints: (builder) => {
    return {
      createAlbum: builder.mutation<AlbumData, User>({
        query: (user: User) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      deleteAlbum: builder.mutation<AlbumData, AlbumData>({
        query: (album: AlbumData) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
            params: {
              album: album.id,
            },
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
