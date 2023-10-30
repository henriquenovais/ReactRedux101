import { FC, useReducer } from "react";

const reducer = (state, action) => {};

const CounterWithRedux: FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    amount: 0,
  });

  return <></>;
};

export default CounterWithRedux;
