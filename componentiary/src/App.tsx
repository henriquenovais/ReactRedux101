import { FC } from "react";
import ButtonsPage from "./pages/ButtonsPage";
import AccordionsPage from "./pages/AccordionsPage";
import DropdownPage from "./pages/DropdownPage";
import { NavigationContextProvider } from "./contexts/NavigationContext";

/**
 * NAVIGATION
 *
 * window.location.pathname => get pathing written after the domain
 * window.history.pushState({}, '', '/dropdown') => changes navigator path
 */

const App: FC = () => {
  return (
    <NavigationContextProvider>
      <h1>Componentiary</h1>
      <ButtonsPage />
      <AccordionsPage />
      <DropdownPage />
    </NavigationContextProvider>
  );
};

export default App;
