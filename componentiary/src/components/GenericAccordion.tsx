import { FC, useState } from "react";
import { AccordionItem } from "../types/genericComponents";

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
    <span className="flex flex-col gap-1.5">
      {items.map((item, index) => {
        const isExpanded = index === expanded;
        return (
          <div key={item.id}>
            <div onClick={(event) => onClick(event, index)}>{item.header}</div>
            {isExpanded && <div>{item.description}</div>}
          </div>
        );
      })}
    </span>
  );
};

export default GenericAccordion;
