import { FC } from "react";
import ButtonsPage from "./pages/ButtonsPage";
import AccordionsPage from "./pages/AccordionsPage";
import DropdownPage from "./pages/DropdownPage";

const App: FC = () => {
  return (
    <div>
      <h1>Componentiary</h1>
      <ButtonsPage />
      <AccordionsPage />
      <DropdownPage />
    </div>
  );
};

export default App;
