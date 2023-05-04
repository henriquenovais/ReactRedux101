import { FC } from "react";

interface IImageCard {
  url: string;
}

const ImageCard: FC<IImageCard> = ({ url }) => {
  return (
    <span>
      <img src={url} alt="searched" width="400" />
    </span>
  );
};

export default ImageCard;
