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

    setExpanded(index);
  };

  return (
    <span>
      {items.map((item, index) => {
        const isExpanded = index === expanded;
        return (
          <span key={item.id}>
            <span onClick={(event) => onClick(event, index)}>
              {item.header}
            </span>
            {isExpanded && item.description}
          </span>
        );
      })}
    </span>
  );
};

export default GenericAccordion;
