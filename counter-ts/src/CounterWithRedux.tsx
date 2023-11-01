import { FC, useReducer } from "react";

interface CounterState {
  counter: number;
  amount: number;
}

interface CounterAction {
  type: CounterActionType;
  payload?: number;
}

type CounterActionType =
  | "increment"
  | "decrement"
  | "setAmount"
  | "incrementByAmount";

const reducer = (state: CounterState, action: CounterAction): CounterState => {
  if (
    (action.type === "setAmount" || action.type === "incrementByAmount") &&
    !action.payload === undefined
  ) {
    throw Error("This action requires a payload");
  } else {
    switch (action.type) {
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
      case "setAmount":
        return {
          counter: state.counter,
          amount: action.payload!,
        };
      case "incrementByAmount":
        return {
          counter: state.counter + state.amount,
          amount: 0,
        };
    }
  }
};

const CounterWithRedux: FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    amount: 0,
  });

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

          dispatch({ type: "incrementByAmount", payload: state.amount });
        }}
      >
        <label className="font-semibold">
          Type specific amount to add to counter:
        </label>
        <input
          className="border-4 border-blue-300 w-32 h-8"
          type="tel"
          pattern="-?[0-9]+"
          value={state.amount}
          onChange={(e) => {
            e.preventDefault();
            e.stopPropagation();
            //state.amount has to be a string for this input to work
            dispatch({
              type: "setAmount",
              payload: e.target.value ? parseInt(e.target.value) : 0,
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
