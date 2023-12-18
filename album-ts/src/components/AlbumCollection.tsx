import { FC } from "react";

import { AlbumData } from "../types";
import { useDeleteAlbumMutation } from "../store/apis/albumsApi";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import { ButtonColoring, ButtonShape } from "../constants/enums/button";
import Accordion from "./Accordion";
import { FaSpinner } from "react-icons/fa";

interface IAlbumCollection {
  data: AlbumData[];
}

const AlbumCollection: FC<IAlbumCollection> = ({ data }) => {
  const [deleteAlbum, results] = useDeleteAlbumMutation();
  const { isLoading: isDeleteAlbumLoading } = results;

  const generateHeader = (album: AlbumData): JSX.Element => (
    <div className="w-60 flex flex-row items-center content-start justify-between p-4">
      <span>{album.title}</span>
      <Button
        onClick={() => deleteAlbum(album)}
        className="w-8 h-8"
        icon={<GoTrash />}
        coloring={ButtonColoring.PRIMARY}
        shape={ButtonShape.PILL}
      />
    </div>
  );

  // const generateContent = (albums: AlbumData[]): JSX.Element => (
  //   <>
  //     <Button
  //       onClick={() => {
  //         createAlbum(data);
  //       }}
  //       text={"Add album"}
  //       coloring={ButtonColoring.PRIMARY}
  //       shape={ButtonShape.PILL}
  //       icon={
  //         isCreateAlbumLoading || isGetAlbumsLoading ? <FaSpinner /> : <></>
  //       }
  //       disabled={isCreateAlbumLoading || isGetAlbumsLoading}
  //     />
  //     <AlbumCollection data={albums} />
  //   </>
  // );

  return (
    <div className="flex flex-col gap-4">
      {isDeleteAlbumLoading ? (
        <FaSpinner />
      ) : (
        data.map((item) => (
          <Accordion key={item.id} header={generateHeader(item)} />
        ))
      )}
    </div>
  );
};

export default AlbumCollection;
