import { FC } from "react";

import { NavigationContextProvider } from "./contexts/NavigationContext";
import Routes from "./Routes";
import GenericSidebar from "./components/GenericSidebar";
import { Paths } from "./constants/enums/routes";
import { IGenericLink } from "./components/GenericLink";

/**
 * NAVIGATION
 *
 * window.location.pathname => get pathing written after the domain
 * window.history.pushState({}, '', '/dropdown') => changes navigator path
 */

const selectedStyling = "border-solid border-indigo-500 border-l-4 pl-2";

const links: IGenericLink[] = [
  { label: "Dropdown", to: Paths.DROPDOWN_PAGE, selectedStyling },
  { label: "Button", to: Paths.BUTTON_PAGE, selectedStyling },
  { label: "Accordion", to: Paths.ACCORDION_PAGE, selectedStyling },
  { label: "Modal", to: Paths.MODAL_PAGE, selectedStyling },
  { label: "Table", to: Paths.TABLE_PAGE, selectedStyling },
];

const App: FC = () => {
  return (
    <NavigationContextProvider>
      <div className="flex flex-row">
        <GenericSidebar links={links} selectedStyling={selectedStyling} />
        <Routes />
      </div>
    </NavigationContextProvider>
  );
};

export default App;
