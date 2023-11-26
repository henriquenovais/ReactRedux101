import { FC } from "react";
import CarForm from "./components/CarForm";
import CarValue from "./components/CarValue";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";

const App: FC = () => {
  return (
    <div className="flex flex-row text-9xl">
      <div >
        <h1>Car management app is here</h1>
      </div>
      <div>
        <CarForm />
        <CarSearch />
        <CarList />
        <CarValue />
      </div>
    </div>
  );
};

export default App;
