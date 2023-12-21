import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AlbumData, PhotoData } from "../../types";
import { pause } from "../../util";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args) => {
      await pause(3000);

      return fetch(...args);
    },
  }),
  tagTypes: ["Photo", "Album"],
  endpoints(builder) {
    return {
      getPhotos: builder.query<PhotoData[], AlbumData>({
        providesTags: (photos, _, album) => {
          if (photos) {
            const tags: Array<{ type: "Photo" | "Album"; id: string }> =
              photos.map((photo) => ({ type: "Photo", id: photo.id }));

            tags.push({ type: "Album", id: album.id });

            return tags;
          }

          return [{ type: "Album", id: album.id }];
        },
        query: (album) => {
          return {
            url: "/photos",
            method: "GET",
            params: {
              albumId: album.id,
            },
          };
        },
      }),
      addPhoto: builder.mutation<PhotoData, AlbumData>({
        invalidatesTags: (_, __, album) => [
          {
            type: "Album",
            id: album.id,
          },
        ],
        query: (album) => {
          return {
            url: "/photos",
            method: "POST",
            body: {
              albumId: album.id,
              url: faker.image.url({ height: 150, width: 150 }),
            },
          };
        },
      }),
      deletePhoto: builder.mutation<PhotoData, PhotoData>({
        invalidatesTags: (_, ___, photo) => [
          {
            type: "Photo",
            id: photo.id,
          },
        ],
        query: (photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: "DELETE",
            params: {
              photoId: photo.id,
            },
          };
        },
      }),
    };
  },
});

export const useGetPhotosQuery = photosApi.endpoints.getPhotos.useQuery;
export const useAddPhotoMutation = photosApi.endpoints.addPhoto.useMutation;
export const useDeletePhotoMutation =
  photosApi.endpoints.deletePhoto.useMutation;

export { photosApi };
