import { FC } from "react";
import { AlbumData, User } from "../types";
import Button from "./Button";
import { ButtonColoring, ButtonShape } from "../constants/enums/button";
import { GoTrash } from "react-icons/go";
import Accordion from "./Accordion";
import { useGetAlbumsQuery } from "../store/apis/albumsApi";

interface IAlbum {
  data: User;
  deleteAlbum: (user: User) => void;
}

const Album: FC<IAlbum> = ({ data, deleteAlbum }) => {
  const { data: albums, error, isLoading } = useGetAlbumsQuery(data);

  const header = (
    <div className="w-80 flex flex-row items-center content-start justify-between p-4">
      <span>{data.name}</span>
      <Button
        onClick={() => deleteAlbum(data)}
        className="w-8 h-8"
        icon={<GoTrash />}
        coloring={ButtonColoring.PRIMARY}
        shape={ButtonShape.PILL}
      />
    </div>
  );

  return (
    <Accordion
      id="something"
      header={header}
      content={<>{`${data.name}'s Album`}</>}
    />
  );
};

export default Album;
