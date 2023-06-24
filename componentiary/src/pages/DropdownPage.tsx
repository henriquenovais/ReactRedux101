import { FC, useState } from "react";
import GenericDropdown from "../components/GenericDropdown";
import { DropdownItem } from "../types/genericComponents";

const DropdownPage: FC = () => {
  const [value, setValue] = useState<DropdownItem>({
    id: "",
    label: "Select ...",
  });

  const items: DropdownItem[] = [
    {
      id: "1",
      label: "How to customize this accordion?",
    },
    {
      id: "2",
      label: "How to customize this page?",
    },
    {
      id: "3",
      label: "How to customize this other stuff?",
    },
  ];

  return (
    <div className="w-fit p-2">
      <h3 className="text-3xl font-bold">Dropdown</h3>
      <div className="flex flex-col gap-3">
        <GenericDropdown
          options={items}
          value={value}
          onChange={(option) => setValue(option)}
        />
      </div>
    </div>
  );
};

export default DropdownPage;
