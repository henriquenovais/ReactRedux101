import { FC } from "react";
import CarForm from "./components/CarForm";
import Total from "./components/Total";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import { Car } from "./types";
import { useSelector } from "react-redux";

const mockData: Car[] = [{ id: "1", name: "Ford Focus", price: 1000 }];

const App: FC = () => {
  const something = useSelector((state) => state);
  console.log("something >>>>>>>>>>", something);

  return (
    <div>
      <div className="flex flex-wrap flex-col items-center content-center justify-center wrap gap-6 mx-8 my-8 p-8 border-2 border-blue-400 rounded-md shadow-lg">
        <h3>Insert car</h3>
        <CarForm />
      </div>
      <div className="flex flex-wrap flex-col items-center content-center justify-center wrap gap-6 mx-8 my-8 p-8 border-2 border-blue-400 rounded-md shadow-lg">
        <CarSearch />
        <CarList data={mockData} />
        <Total total={100} />
      </div>
    </div>
  );
};

export default App;
