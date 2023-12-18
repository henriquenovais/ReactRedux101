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
    isFetching: isGetAlbumsFetching, //isFetching is for every single time the query is called and isLoading is only for the first call of the query/mutation
  } = useGetAlbumsQuery(data);

  const [createAlbum, createAlbumResults] = useCreateAlbumMutation();
  const { isLoading: isCreateAlbumLoading } = createAlbumResults; //isLoading is only for the first call of the query/mutation

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
        icon={
          isCreateAlbumLoading || isGetAlbumsFetching ? <FaSpinner /> : <></>
        }
        disabled={isCreateAlbumLoading || isGetAlbumsFetching}
      />
      <AlbumCollection data={albums} />
    </>
  );

  return (
    <Accordion
      header={header}
      content={
        isGetAlbumsFetching || !albums ? <FaSpinner /> : generateContent(albums)
      }
    />
  );
};

export default UserInformation;
