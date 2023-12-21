import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AlbumData, PhotoData } from "../../types";
import { pause } from "../../util";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args) => {
      await pause(3000);

      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      getPhotos: builder.query<PhotoData, AlbumData>({
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
        query: (album) => {
          return {
            url: "/photos",
            method: "POST",
            body: {
              albumId: album.id,
              photoUrl: "soemthig",
            },
          };
        },
      }),
      removePhoto: builder.mutation<PhotoData, PhotoData>({
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
export const useRemovePhotoMutation =
  photosApi.endpoints.removePhoto.useMutation;

export { photosApi };
