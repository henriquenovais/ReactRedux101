import classNames from "classnames";
import { FC, useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

interface IAccordion {
  id: string;
  header: JSX.Element;
  description: string;
  headerClassName?: string;
}

const Accordion: FC<IAccordion> = ({
  id,
  header,
  description,
  headerClassName = "",
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const onClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setExpanded(!expanded);
  };

  const headerStyle = classNames(
    "flex flex-row items-center justify-between cursor-pointer",
    headerClassName
  );

  return (
    <div className="flex flex-col gap-0.5 select-none">
      <div key={id} className="w-80 border-2 border-solid border-gray-300">
        <div
          key={id}
          className={headerStyle}
          onClick={(event) => onClick(event)}
        >
          {expanded ? (
            <GoChevronDown className="text-3xl" />
          ) : (
            <GoChevronLeft className="text-3xl" />
          )}
          {header}
        </div>
        {expanded && (
          <div className="cursor-default p-1 text-left border-t-2 border-gray-300">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
