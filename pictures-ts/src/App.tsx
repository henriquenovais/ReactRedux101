import { FC } from "react";
import unsplashService from "./services/unsplash";

const App: FC = () => {
  unsplashService.getImage("cars").then((result) => {
    console.log("result >>>>>>>>>", result);
  });

  return <h1>App</h1>;
};

export default App;
