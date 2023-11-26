import { FC } from "react";
import CarForm from "./components/CarForm";
import CarValue from "./components/CarValue";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";

const App: FC = () => {
  return (
    <div className="flex flex-row px-6 py-3 rounded-md shadow-md">
      <div>
        <CarForm />
      </div>
    </div>
  );
};

export default App;
