import { FC } from "react";
import ButtonsPage from "./pages/ButtonsPage";
import AccordionsPage from "./pages/AccordionsPage";

const App: FC = () => {
  return (
    <div>
      <h1>Componentiary</h1>
      <ButtonsPage />
      <AccordionsPage />
    </div>
  );
};

export default App;
