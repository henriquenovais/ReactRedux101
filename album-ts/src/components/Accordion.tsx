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
    <div className="gap-0">
      <div className="w-80 flex flex-col select-none p-4 border-2 border-solid border-gray-300">
        <div key={id}>
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
        </div>
      </div>
      {expanded && (
        <div className="w-80 flex flex-col select-none p-4 border-x-2 border-b-2 border-solid border-gray-300">
          {description}
        </div>
      )}
    </div>
  );
};

export default Accordion;
