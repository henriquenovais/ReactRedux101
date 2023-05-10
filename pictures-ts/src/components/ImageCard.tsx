import { FC } from "react";
import "./ImageCard.css";

interface IImageCard {
  url: string;
}

const ImageCard: FC<IImageCard> = ({ url }) => {
  return (
    <div className="card">
      <img src={url} alt="searched" width="400" />
    </div>
  );
};

export default ImageCard;
