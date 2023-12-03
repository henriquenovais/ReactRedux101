import { FC } from "react";
import { User } from "../types";

interface IAlbum {
  data: User;
}

const Album: FC<IAlbum> = ({ data }) => {
  return <h1>{data.name}</h1>;
};

export default Album;
