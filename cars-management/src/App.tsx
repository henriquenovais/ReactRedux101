import { FC } from "react";
import CarForm from "./components/CarForm";
import CarValue from "./components/CarValue";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";

const App: FC = () => {
  return (
    <div className="flex flex-col items-center content-center justify-center gap-6 mx-8 my-8 p-8 border-2 border-blue-400 rounded-md shadow-lg">
      <h3>Insert car</h3>
      <CarForm />

    </div>
  );
};

export default App;
