import { FC } from "react";

import { AlbumData } from "../types";

interface IAlbumCollection {
  data: AlbumData[];
}

const AlbumCollection: FC<IAlbumCollection> = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </>
  );
};

export default AlbumCollection;
