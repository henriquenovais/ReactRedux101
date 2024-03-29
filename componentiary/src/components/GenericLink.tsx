import { FC, MouseEvent, useContext } from "react";
import { classNamer } from "../utils/Strings";
import NavigationContext from "../contexts/NavigationContext";

export interface IGenericLink {
  label: string;
  to: string;
  selectedStyling: string;
}

const GenericLink: FC<IGenericLink> = ({ label, to, selectedStyling }) => {
  const { currentPath, navigateTo } = useContext(NavigationContext);

  const classNames = classNamer(
    { [`${selectedStyling}`]: to === currentPath },
    "text-blue-500"
  );

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.ctrlKey || event.metaKey) return; //when ctrl click should behave as normal

    event.preventDefault();
    event.stopPropagation();

    navigateTo(to);
  };

  return (
    <a href={to} className={classNames} onClick={handleClick}>
      {label}
    </a>
  );
};

export default GenericLink;
