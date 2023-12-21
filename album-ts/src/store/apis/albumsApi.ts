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
  tagTypes: ["User", "Album"],
  endpoints: (builder) => {
    return {
      createAlbum: builder.mutation<AlbumData, User>({
        // invalidatesTags: (_, __, user) => {
        //   return [{ type: "Album", id: user.id }];
        // },
        invalidatesTags: (_, __, user) => {
          return [{ type: "User", id: user.id }];
        },
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
        // invalidatesTags: (_, __, album) => {
        //   return [{ type: "Album", id: album.userId }];
        // },
        invalidatesTags: (_, __, album) => {
          return [{ type: "Album", id: album.id }];
        },
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
        // providesTags: (_, __, user) => {
        //   return [{ type: "Album", id: user.id }];
        // },
        providesTags: (albums, __, user) => {
          if (albums) {
            const tags: Array<{ type: "User" | "Album"; id: string }> =
              albums?.map((item) => ({ type: "Album", id: item.id }));

            return [{ type: "User", id: user.id }, ...tags];
          } else {
            return [{ type: "User", id: user.id }];
          }
        },
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
export const useDeleteAlbumMutation =
  albumsApi.endpoints.deleteAlbum.useMutation;
export { albumsApi };
