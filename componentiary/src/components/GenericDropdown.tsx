import { FC, MouseEvent, useState } from "react";
import { DropdownItem } from "../types/genericComponents";

export interface IGenericDropdown {
  onChange: (id: DropdownItem) => void;
  options: DropdownItem[];
  value: DropdownItem;
}

const GenericDropdown: FC<IGenericDropdown> = ({
  options,
  onChange,
  value,
}) => {
  const [toggle, setToggle] = useState<Boolean>(false);

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

    onChange(option);
    setToggle((current) => !current);
  };

  return (
    <div>
      <div onClick={handleToggleClick}>{value.label}</div>
      <div>{toggle && showOptions(options)}</div>
    </div>
  );
};

export default GenericDropdown;
