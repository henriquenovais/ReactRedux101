import { FC, MouseEvent, useState } from "react";
import { DropdownItem } from "../types/genericComponents";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

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

  const showOptions: JSX.Element[] = options.map((option) => (
    <div
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
      onClick={(event) => handleDropdownClick(event, option)}
    >
      {option.label}
    </div>
  ));

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
    <div className="w-80 relative ">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleToggleClick}
      >
        {value.label}
        {toggle ? <GoChevronDown /> : <GoChevronLeft />}{" "}
      </div>
      {toggle && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {showOptions}
        </div>
      )}
    </div>
  );
};

export default GenericDropdown;
