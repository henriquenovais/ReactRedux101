import { FaSpinner } from "react-icons/fa";
import { FC } from "react";

import { AlbumData, User } from "../types";
import Button from "./Button";
import { ButtonColoring, ButtonShape } from "../constants/enums/button";
import { GoTrash } from "react-icons/go";
import Accordion from "./Accordion";
import AlbumCollection from "./AlbumCollection";
import {
  useCreateAlbumMutation,
  useGetAlbumsQuery,
} from "../store/apis/albumsApi";

interface IUserInformation {
  data: User;
  deleteUser: (user: User) => void;
}

const UserInformation: FC<IUserInformation> = ({ data, deleteUser }) => {
  const {
    data: albums,
    error: getAlbumsError,
    isLoading: isGetAlbumsLoading,
  } = useGetAlbumsQuery(data);

  const [createAlbum] = useCreateAlbumMutation();

  if (getAlbumsError) {
    console.error("Error happened during GetAlbumsQuery", getAlbumsError);
  }

  const header: JSX.Element = (
    <div className="w-80 flex flex-row items-center content-start justify-between p-4">
      <span>{data.name}</span>
      <Button
        onClick={() => deleteUser(data)}
        className="w-8 h-8"
        icon={<GoTrash />}
        coloring={ButtonColoring.PRIMARY}
        shape={ButtonShape.PILL}
      />
    </div>
  );

  const generateContent = (albums: AlbumData[]): JSX.Element => (
    <>
      <Button
        onClick={() => {
          createAlbum(data);
        }}
        text={"Add album"}
        coloring={ButtonColoring.PRIMARY}
        shape={ButtonShape.PILL}
        icon={isGetAlbumsLoading ? <FaSpinner /> : <></>}
        disabled={isGetAlbumsLoading}
      />
      <AlbumCollection data={albums} />
    </>
  );

  return (
    <Accordion
      id="something"
      header={header}
      content={
        isGetAlbumsLoading || !albums ? <FaSpinner /> : generateContent(albums)
      }
    />
  );
};

export default UserInformation;
