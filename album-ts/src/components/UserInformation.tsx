import { FC } from "react";
import { AlbumData, User } from "../types";
import Button from "./Button";
import { ButtonColoring, ButtonShape } from "../constants/enums/button";
import { GoTrash } from "react-icons/go";
import Accordion from "./Accordion";
import { useGetAlbumsQuery } from "../store/apis/albumsApi";

interface IUserInformation {
  data: User;
  deleteAlbum: (user: User) => void;
}

const UserInformation: FC<IUserInformation> = ({ data, deleteAlbum }) => {
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

  const generateAlbunsContent = (): JSX.Element => {
    if (albums) {
      return <>{albums?.map((item) => <div>{item.title}</div>)}</>;
    }

    return <></>;
  };

  return (
    <Accordion
      id="something"
      header={header}
      content={generateAlbunsContent()}
    />
  );
};

export default UserInformation;
