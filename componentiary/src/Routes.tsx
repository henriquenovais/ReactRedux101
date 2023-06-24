import React, { useContext } from "react";
import { FC } from "react";
import NavigationContext from "./contexts/NavigationContext";
import DropdownPage from "./pages/DropdownPage";
import ButtonsPage from "./pages/ButtonsPage";
import AccordionsPage from "./pages/AccordionsPage";
import { Paths } from "./types/routes";

const PAGES: Record<string, JSX.Element> = {
  [Paths.DROPDOWN_PAGE]: <DropdownPage />,
  [Paths.BUTTON_PAGE]: <ButtonsPage />,
  [Paths.ACCORDION_PAGE]: <AccordionsPage />,
  [Paths.ROOT]: <AccordionsPage />,
};

const Routes: FC = () => {
  const { currentPath } = useContext(NavigationContext);

  return (
    <React.Fragment>{PAGES[currentPath] ?? <DropdownPage />}</React.Fragment>
  );
};

export default Routes;
