import { FC } from "react";
import { User } from "../types";
import Button from "./Button";
import { ButtonColoring, ButtonShape } from "../constants/enums/button";
import { GoTrash } from "react-icons/go";

interface IAlbum {
  data: User;
  deleteAlbum: (user: User) => void;
}

const Album: FC<IAlbum> = ({ data, deleteAlbum }) => {
  return (
    <div className="w-80 flex flex-row items-center content-start justify-between p-4 border-2 border-gray-300">
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
};

export default Album;
