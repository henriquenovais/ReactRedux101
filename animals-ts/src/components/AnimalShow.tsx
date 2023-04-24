import { FC, useState } from "react";
import "./AnimalShow.css";

import { ReactComponent as CatSvg } from "../svg/cat.svg";
import { ReactComponent as DogSvg } from "../svg/dog.svg";
import { ReactComponent as HorseSvg } from "../svg/horse.svg";
import { ReactComponent as CowSvg } from "../svg/cow.svg";
import { ReactComponent as BirdSvg } from "../svg/bird.svg";
import { ReactComponent as GatorSvg } from "../svg/gator.svg";
import { ReactComponent as HeartSvg } from "../svg/heart.svg";
interface IAnimalShow {
  type: string;
}

const AnimalShow: FC<IAnimalShow> = ({ type }) => {
  const [heartSize, setHeartSize] = useState<number>(10);

  const selectAnimal = (type: string): JSX.Element | undefined => {
    switch (type) {
      case "cat":
        return <CatSvg />;
      case "horse":
        return <HorseSvg />;
      case "cow":
        return <CowSvg />;
      case "bird":
        return <BirdSvg />;
      case "gator":
        return <GatorSvg />;
      case "dog":
        return <DogSvg />;
      default:
        return undefined;
    }
  };

  return (
    <div className="container">
      <h1>{selectAnimal(type)}</h1>
      <HeartSvg className="heart" />
    </div>
  );
};

export default AnimalShow;
