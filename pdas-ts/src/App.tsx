import { FC } from "react";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

const App: FC = () => {
  return (
    <div>
      <h1>This is the PDAS app</h1>

      <ProfileCard
        title="cortana"
        handle="@cortana22"
        img={CortanaImage}
        imgAlt="cortana profile img"
      />
      <ProfileCard
        title="siri"
        handle="@siri01"
        img={SiriImage}
        imgAlt="siri profile img"
      />
      <ProfileCard
        title="alexa"
        handle="@alexa99"
        img={AlexaImage}
        imgAlt="alexa profile img"
      />
    </div>
  );
};

export default App;
