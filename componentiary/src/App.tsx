import { FC } from "react";

import { NavigationContextProvider } from "./contexts/NavigationContext";
import Routes from "./Routes";
import GenericSidebar from "./components/GenericSidebar";

/**
 * NAVIGATION
 *
 * window.location.pathname => get pathing written after the domain
 * window.history.pushState({}, '', '/dropdown') => changes navigator path
 */

const App: FC = () => {
  return (
    <NavigationContextProvider>
      <div className="flex flex-row">
        <GenericSidebar />
        <Routes />
      </div>
    </NavigationContextProvider>
  );
};

export default App;
