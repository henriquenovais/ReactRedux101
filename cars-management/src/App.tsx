import { FC } from "react";
import CarForm from "./components/CarForm";
import Total from "./components/Total";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import { Car } from "./types";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App: FC = () => {
  const cars = useSelector((current: RootState) => current.cars);

  const calculateTotal = (input: Car[]): number => {
    return input.reduce((acc, current) => acc + current.price, 0);
  };

  const carList = cars.data.filter((current) =>
    current.name.includes(cars.searchTerm)
  );

  return (
    <div>
      <div className="flex flex-wrap flex-col items-center content-center justify-center wrap gap-6 mx-8 my-8 p-8 border-2 border-blue-400 rounded-md shadow-lg">
        <h3>Insert car</h3>
        <CarForm />
      </div>
      <div className="flex flex-wrap flex-col items-center content-center justify-center wrap gap-6 mx-8 my-8 p-8 border-2 border-blue-400 rounded-md shadow-lg">
        <CarSearch />
        <CarList data={carList} />
        <Total total={calculateTotal(carList)} />
      </div>
    </div>
  );
};

export default App;
