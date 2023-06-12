import { FC } from "react";
import GenericButton from "./components/GenericButton";
import { ButtonColoring } from "./constants/enums/button";
import { GoBell } from "react-icons/go";

const App: FC = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold">Buttons</h3>
      <div className="flex flex-col gap-3">
        <GenericButton
          text="Click me!"
          icon={<GoBell />}
          coloring={ButtonColoring.PRIMARY}
        />
        <GenericButton text="Buy now!" coloring={ButtonColoring.SECONDARY} />
        <GenericButton text="See deal!" coloring={ButtonColoring.SUCCESS} />
        <GenericButton text="Hide ads!" coloring={ButtonColoring.WARNING} />
        <GenericButton text="Fix this!" coloring={ButtonColoring.DANGER} />
      </div>
    </div>
  );
};

export default App;
