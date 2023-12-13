import { FC } from "react";

import { User } from "../types";
import Button from "./Button";
import { ButtonColoring, ButtonShape } from "../constants/enums/button";
import { GoTrash } from "react-icons/go";
import Accordion from "./Accordion";
import AlbumCollection from "./AlbumCollection";

interface IUserInformation {
  data: User;
  deleteUser: (user: User) => void;
}

const UserInformation: FC<IUserInformation> = ({ data, deleteUser }) => {
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
      content={<AlbumCollection userInfo={data} />}
    />
  );
};

export default UserInformation;
