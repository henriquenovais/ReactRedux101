import { FC } from "react";
import GenericLink, { IGenericLink } from "./GenericLink";
import { Paths } from "../types/routes";

const selectedStyling = "border-solid border-indigo-500 border-l-4 pl-2";

const links: IGenericLink[] = [
  { label: "Dropdown", to: Paths.DROPDOWN_PAGE, selectedStyling },
  { label: "Button", to: Paths.BUTTON_PAGE, selectedStyling },
  { label: "Accordion", to: Paths.ACCORDION_PAGE, selectedStyling },
];

const GenericSidebar: FC = () => {
  return (
    <div className="flex flex-col items-start gap-4 ml-1.5 h-screen w-32 p-4">
      {links.map((link) => (
        <GenericLink
          label={link.label}
          to={link.to}
          selectedStyling={link.selectedStyling}
        />
      ))}
    </div>
  );
};

export default GenericSidebar;
