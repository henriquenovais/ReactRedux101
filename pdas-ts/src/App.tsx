import { FC } from "react";
import "bulma/css/bulma.css";

import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

const App: FC = () => {
  return (
    <div>
      <h1>This is the PDAS app</h1>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="cortana"
                handle="@cortana22"
                img={CortanaImage}
                imgAlt="cortana profile img"
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="siri"
                handle="@siri01"
                img={SiriImage}
                imgAlt="siri profile img"
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="alexa"
                handle="@alexa99"
                img={AlexaImage}
                imgAlt="alexa profile img"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
