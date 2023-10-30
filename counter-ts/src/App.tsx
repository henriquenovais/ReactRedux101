import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  const count = (increment: boolean): void => {
    increment ? setCounter(counter + 1) : setCounter(counter - 1);
  };

  const addByAmount = (amount: number): void => {
    setCounter(counter + amount);
  };

  return (
    <div className="h-96 w-full font-mono flex flex-col items-center gap-4">
      <h1>Counter is: {counter}</h1>
      <button
        className="border-4 border-blue-300 w-32 h-8 bg-blue-300"
        onClick={() => count(true)}
      >
        Increment
      </button>
      <button
        className="border-4 border-blue-300 w-32 h-8 bg-blue-300"
        onClick={() => count(false)}
      >
        Decrement
      </button>
      <form
        className="h-96 flex flex-col items-center gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          addByAmount(amount);
        }}
      >
        <label>Type specific amount to add to counter:</label>
        <input
          className="border-4 border-blue-300 w-32 h-8"
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
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
}

export default App;
