import { FC } from "react";

interface IProfileCard {
  title: string;
  handle: string;
  image?: string;
}

const ProfileCard: FC<IProfileCard> = ({ title, handle, image }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{handle}</h2>
      <>{image}</>
    </>
  );
};

export default ProfileCard;
