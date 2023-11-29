import { FC } from "react";

interface ITotal {
  total: number;
}

const Total: FC<ITotal> = ({total}) => {
  return <h1>{`Total: $${total}`}</h1>;
};

export default Total;
