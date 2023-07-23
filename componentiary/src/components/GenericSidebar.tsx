import { FC } from "react";
import GenericLink, { IGenericLink } from "./GenericLink";

interface IGenericSidebar {
  links: IGenericLink[];
  selectedStyling?: string;
}

const GenericSidebar: FC<IGenericSidebar> = ({ links, selectedStyling }) => {
  return (
    <div className="flex flex-col items-start gap-4 ml-1.5 h-screen w-32 p-4">
      {links.map((link) => (
        <GenericLink
          key={link.label}
          label={link.label}
          to={link.to}
          selectedStyling={selectedStyling ?? ""}
        />
      ))}
    </div>
  );
};

export default GenericSidebar;
