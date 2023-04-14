import { FC } from "react";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa";

console.log(AlexaImage);

const App: FC = () => {
  return (
    <div>
      <h1>This is the PDAS app</h1>
      <ProfileCard title="cortana" handle="@cortana22" />
      <ProfileCard title="siri" handle="@siri01" />
      <ProfileCard title="alexa" handle="@alexa99" />
    </div>
  );
};

export default App;
