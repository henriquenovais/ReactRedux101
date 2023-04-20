import { FC, useState } from "react";
import AnimalShow from "./AnimalShow";

const App: FC = () => {
  const [animals, setAnimals] = useState<string[]>([]);

  const generateAnimal = (): string => {
    const animalList = ["cat", "bird", "cow", "dog", "gator", "horse"];

    return animalList[Math.floor(Math.random() * animalList.length)];
  };
  const onClick = () => {
    setAnimals([...animals, generateAnimal()]);
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>Add animal</button>
      </div>
      {animals.map((animal) => (
        <AnimalShow type={animal} />
      ))}
    </div>
  );
};

export default App;
