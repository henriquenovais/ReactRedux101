import { FC, useState } from "react";

const App: FC = () => {
  const [animalCount, setAnimalCount] = useState<number>(0);

  return (
    <div>
      <div>
        <button onClick={() => setAnimalCount((before) => before + 1)}>
          Add animal
        </button>
      </div>
      <div>{animalCount}</div>
    </div>
  );
};

export default App;
