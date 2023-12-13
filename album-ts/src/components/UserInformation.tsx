import { FaSpinner } from "react-icons/fa";
import { FC } from "react";

import { User } from "../types";
import Button from "./Button";
import { ButtonColoring, ButtonShape } from "../constants/enums/button";
import { GoTrash } from "react-icons/go";
import Accordion from "./Accordion";
import AlbumCollection from "./AlbumCollection";
import { useGetAlbumsQuery } from "../store/apis/albumsApi";

interface IUserInformation {
  data: User;
  deleteUser: (user: User) => void;
}

const UserInformation: FC<IUserInformation> = ({ data, deleteUser }) => {
  const { data: albums, error, isLoading } = useGetAlbumsQuery(data);

  if (error) {
    console.error("Error happened during GetAlbumsQuery", error);
  }

  const header = (
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

  return (
    <Accordion
      id="something"
      header={header}
      content={
        isLoading || !albums ? <FaSpinner /> : <AlbumCollection data={albums} />
      }
    />
  );
};

export default UserInformation;
