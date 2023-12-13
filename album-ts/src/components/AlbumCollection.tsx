import { FC } from "react";
import { FaSpinner } from "react-icons/fa";

import { User } from "../types";
import { useGetAlbumsQuery } from "../store/apis/albumsApi";

interface IAlbumCollection {
  userInfo: User;
}

const AlbumCollection: FC<IAlbumCollection> = ({ userInfo }): JSX.Element => {
  const { data: albums, error, isLoading } = useGetAlbumsQuery(userInfo);

  const generateAlbunsContent = (): JSX.Element => {
    if (albums && albums.length > 0) {
      return <>{albums?.map((item) => <div>{item.title}</div>)}</>;
    }

    return <></>;
  };

  if (error) {
    console.error("Error happened during GetAlbumsQuery", error);
  }

  return isLoading ? <FaSpinner /> : generateAlbunsContent();
};

export default AlbumCollection;
