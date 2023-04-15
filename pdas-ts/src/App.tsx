import { FC } from "react";
import "bulma/css/bulma.css";

import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

const App: FC = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">This is the PDAS app</p>
          <p className="subtitle"></p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="cortana"
                handle="@cortana22"
                img={CortanaImage}
                imgAlt="cortana profile img"
                description="Cortana is the digital assistant from Microsoft, the company founded by Bill Gates."
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="siri"
                handle="@siri01"
                img={SiriImage}
                imgAlt="siri profile img"
                description="Siri is the digital assistant from Apple, the company that was reinvented by Steve Jobs."
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="alexa"
                handle="@alexa99"
                img={AlexaImage}
                imgAlt="alexa profile img"
                description="Alexa is a digital assistant from Amazon, the company founded by Jeff Besos"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
