import classNames from "classnames";
import React from "react";
import { FC, useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

interface IAccordion {
  header: JSX.Element;
  content?: JSX.Element;
  headerClassName?: string;
}

const Accordion: FC<IAccordion> = ({
  header,
  content,
  headerClassName = "",
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const onClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (content) {
      setExpanded(!expanded);
    }
  };

  const headerStyle = classNames(
    "flex flex-row items-center justify-between cursor-pointer",
    headerClassName
  );

  return (
    <div className="gap-0 select-none border-2 border-gray-400">
      <div className="w-80 flex flex-col p-4">
        <div>
          <div className={headerStyle} onClick={(event) => onClick(event)}>
            {content &&
              (expanded ? (
                <GoChevronDown className="text-3xl" />
              ) : (
                <GoChevronLeft className="text-3xl" />
              ))}
            {header}
          </div>
        </div>
      </div>
      {expanded && (
        <div className="w-80 flex flex-col p-4 border-t-2 border-gray-400">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
