import { FC } from "react";
import ProfileCard from "./ProfileCard";

const App: FC = () => {
  return (
    <div>
      <h1>This is the PDAS app</h1>
      <ProfileCard title="cortana" handle="@cortana22" />
      <ProfileCard title="siri" handle="@siri01" />
      <ProfileCard title="siri" handle="@siri01" />
    </div>
  );
};

export default App;
