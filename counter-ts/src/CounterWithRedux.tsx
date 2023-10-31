import { FC, useReducer } from "react";

interface CounterState {
  counter: number;
  amount: number;
}

interface CounterAction {
  type: "increment" | "decrement" | "addAmount" | "updateAmount";
  newAmount?: number;
}

const reducer = (state: CounterState, action: CounterAction): CounterState => {
  const newAmount = action.newAmount ? action.newAmount : 0;

  switch (action.type) {
    case "addAmount":
      return {
        counter: state.counter + state.amount,
        amount: 0,
      };

    case "increment":
      return {
        counter: state.counter++,
        amount: state.amount,
      };

    case "decrement":
      return {
        counter: state.counter--,
        amount: state.amount,
      };

    default:
      return {
        counter: state.counter,
        amount: newAmount,
      };
  }
};

const CounterWithRedux: FC = () => {
  const initialState: CounterState = {
    counter: 0,
    amount: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="h-96 w-full font-mono text-lg flex flex-col items-center gap-4 ">
      <h1 className="font-semibold">Counter is: {state.counter}</h1>
      <button
        className="border-4 border-blue-300 w-32 h-8 bg-blue-300"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
      <button
        className="border-4 border-blue-300 w-32 h-8 bg-blue-300"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
      <form
        className="h-96 flex flex-col items-center gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();

          dispatch({ type: "addAmount" });
        }}
      >
        <label className="font-semibold">
          Type specific amount to add to counter:
        </label>
        <input
          className="border-4 border-blue-300 w-32 h-8"
          type="number"
          value={state.amount}
          onChange={(e) => {
            e.preventDefault();
            e.stopPropagation();

            dispatch({
              type: "updateAmount",
              newAmount: parseInt(e.target.value),
            });
          }}
        />
        <button
          className="border-4 border-blue-300 w-32 h-8 bg-blue-300"
          type="submit"
        >
          Add amount
        </button>
      </form>
    </div>
  );
};

export default CounterWithRedux;