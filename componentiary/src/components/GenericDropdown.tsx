import { FC, MouseEvent, useState } from "react";
import { DropdownItem } from "../types/genericComponents";

export interface IGenericDropdown {
  options: DropdownItem[];
}

const GenericDropdown: FC<IGenericDropdown> = ({ options }) => {
  const [toggle, setToggle] = useState<Boolean>(false);
  const [selected, setSelected] = useState<DropdownItem>({
    id: "",
    label: "Select ...",
  });

  const showOptions = (options: DropdownItem[]): JSX.Element[] => {
    return options.map((option) => (
      <div onClick={(event) => handleDropdownClick(event, option)}>
        {option.label}
      </div>
    ));
  };

  const handleToggleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setToggle((current) => !current);
  };

  const handleDropdownClick = (
    event: MouseEvent<HTMLDivElement>,
    option: DropdownItem
  ) => {
    event.preventDefault();
    event.stopPropagation();

    setSelected(option);
    setToggle((current) => !current);
  };

  return (
    <div>
      <div onClick={handleToggleClick}>{selected.label}</div>
      <div>{toggle && showOptions(options)}</div>
    </div>
  );
};

export default GenericDropdown;
