import { FC } from "react";

interface IProfileCard {
  title: string;
  handle: string;
  img: string;
  imgAlt: string;
}

const ProfileCard: FC<IProfileCard> = ({ title, handle, img }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{handle}</h2>
      <img src={img} alt="" />
    </>
  );
};

export default ProfileCard;
