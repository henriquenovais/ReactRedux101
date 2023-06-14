import { FC, useState } from "react";
import { AccordionItem } from "../types/genericComponents";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

interface IGenericAccordion {
  items: AccordionItem[];
}

const GenericAccordion: FC<IGenericAccordion> = ({ items }) => {
  const [expanded, setExpanded] = useState<number>(-1);

  const onClick = (event: React.MouseEvent<HTMLSpanElement>, index: number) => {
    event.preventDefault();
    event.stopPropagation();

    expanded === index ? setExpanded(-1) : setExpanded(index);
  };

  return (
    <div className="w-full flex flex-col gap-0.5">
      {items.map((item, index) => {
        const isExpanded = index === expanded;
        return (
          <div
            key={item.id}
            className="w-80 border-2 border-solid border-gray-950"
          >
            <div
              key={item.id}
              className="flex flex-row items-center justify-between cursor-pointer bg-green-500 p-1"
              onClick={(event) => onClick(event, index)}
            >
              {item.header}
              {isExpanded ? <GoChevronLeft /> : <GoChevronDown />}
            </div>
            {isExpanded && (
              <div className="cursor-default p-1 text-left border-t-2 border-gray-950">
                {item.description}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GenericAccordion;
