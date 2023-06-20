import { FC } from "react";
import { classNamer } from "../utils/Strings";

interface IPanel {
  children: JSX.Element[];
}

const Panel: FC<IPanel> = ({ children }) => {
  const finalClassNames = classNamer(
    {},
    "border rounder p-3 shadow bg-white w-full"
  );
  return <div className={finalClassNames}>{children}</div>;
};

export default Panel;
