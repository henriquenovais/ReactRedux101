import { FC, useReducer } from "react";

interface CounterState {
  counter: number;
  amount: number;
}

interface CounterAction {
  setCounter: number;
  setAmount: number;
}

const reducer = (state: CounterState, action: CounterAction): CounterState => {
  return {
    counter: action.setCounter,
    amount: action.setAmount,
  };
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
        onClick={() =>
          dispatch({ setCounter: state.counter + 1, setAmount: state.amount })
        }
      >
        Increment
      </button>
      <button
        className="border-4 border-blue-300 w-32 h-8 bg-blue-300"
        onClick={() =>
          dispatch({ setCounter: state.counter - 1, setAmount: state.amount })
        }
      >
        Decrement
      </button>
      <form
        className="h-96 flex flex-col items-center gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();

          dispatch({ setCounter: state.counter + state.amount, setAmount: 0 });
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

            dispatch({
              setCounter: state.counter,
              setAmount: e.target.value ? parseInt(e.target.value) : 0,
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
