import { FC } from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

interface IImageList {
  arrUrl: Array<string>;
}

const ImageList: FC<IImageList> = ({ arrUrl }) => {
  return (
    <div>
      {arrUrl.map((value, index) => (
        <ImageCard key={index} url={value} />
      ))}
    </div>
  );
};

export default ImageList;
