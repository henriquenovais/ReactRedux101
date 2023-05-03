import { FC, useState } from "react";
import unsplashService from "./services/unsplash";

const App: FC = () => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  unsplashService.getImage("cars").then((result) => {
    console.log("result >>>>>>>>>", result);
    console.log(
      "result[0].links.html >>>>>>>>>>",
      result.results[0].links.html
    );
    setImageUrl(result.results[0].links.download);
  });

  return (
    <h1>
      App
      {imageUrl && <img src={imageUrl} alt="cool" width={500} />}
    </h1>
  );
};

export default App;
