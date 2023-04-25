import { FC, useState } from "react";
import "./App.css";

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
    <div className="app-container">
      <button onClick={onClick}>Add animal</button>
      <div className="animal-list">
        {animals.map((animal, index) => (
          <AnimalShow key={index} type={animal} />
        ))}
      </div>
    </div>
  );
};

export default App;
