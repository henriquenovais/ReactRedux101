import { FC } from "react";
import { AlbumData } from "../types";
import {
  useAddPhotoMutation,
  useDeletePhotoMutation,
  useGetPhotosQuery,
} from "../store/apis/photosApi";
import Button from "./Button";
import { FaSpinner } from "react-icons/fa";
import { ButtonColoring, ButtonShape } from "../constants/enums/button";
import { GoTrash } from "react-icons/go";

interface IPhotosCollection {
  album: AlbumData;
}

const PhotosCollection: FC<IPhotosCollection> = ({ album }) => {
  const { data: photos, isFetching: isGetPhotosFetching } =
    useGetPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();
  const [deletePhoto] = useDeletePhotoMutation();

  return (
    <div>
      <Button
        onClick={() => {
          addPhoto(album);
        }}
        text={"Add photo"}
        coloring={ButtonColoring.PRIMARY}
        shape={ButtonShape.PILL}
        icon={
          isGetPhotosFetching || addPhotoResults.isLoading ? (
            <FaSpinner />
          ) : (
            <></>
          )
        }
        disabled={isGetPhotosFetching || addPhotoResults.isLoading}
      />
      <div className="flex flex-row gap-4">
        {photos &&
          photos.map((photo) => (
            <div key={photo.id} className="relative cursor-pointer m-2">
              <img className="h-20 w-20" src={photo.url} alt={"random"} />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:bg-gray-200 hover:opacity-80"
                onClick={() => deletePhoto(photo)}
              >
                <GoTrash className="text-3xl" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PhotosCollection;
