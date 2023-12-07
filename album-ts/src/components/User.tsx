import { FC } from "react";
import { User } from "../types";
import Button from "./Button";
import { ButtonColoring, ButtonShape } from "../constants/enums/button";

interface IAlbum {
  data: User;
  deleteAlbum: (id: string) => void;
}

const Album: FC<IAlbum> = ({ data, deleteAlbum }) => {
  return (
    <div className="flex flex-row items-start content-center gap-8">
      <div className="w-60">{data.name}</div>
      <div>
        <Button
          onClick={() => deleteAlbum(data.id)}
          className="w-8 h-8"
          text={"X"}
          coloring={ButtonColoring.DANGER}
          shape={ButtonShape.PILL}
        />
      </div>
    </div>
  );
};

export default Album;
