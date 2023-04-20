import { FC } from "react";

interface IAnimalShow {
  type: string;
}

const AnimalShow: FC<IAnimalShow> = ({ type }) => {
  return <h1>{type}</h1>;
};

export default AnimalShow;
