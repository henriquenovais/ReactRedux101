import { FC } from "react";

import { ReactComponent as CatSvg } from "../svg/cat.svg";

interface IAnimalShow {
  type: string;
}

const AnimalShow: FC<IAnimalShow> = ({ type }) => {
  return (
    <div>
      <CatSvg />
      <h1>{type}</h1>
    </div>
  );
};

export default AnimalShow;
