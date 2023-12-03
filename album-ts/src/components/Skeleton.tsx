import classNames from "classnames";
import { FC } from "react";

interface ISkeleton {
  layoutQty: number;
  className?: string;
}

const Skeleton: FC<ISkeleton> = ({ layoutQty, className }) => {
  const outerClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    className
  );

  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );

  return (
    <>
      {Array(layoutQty)
        .fill(0)
        .map((_, i) => {
          return (
            <div className={outerClassNames} key={i}>
              <div className={innerClassNames} />
            </div>
          );
        })}
    </>
  );
};

export default Skeleton;
