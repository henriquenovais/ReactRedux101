import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

/*
  Class based components VS Function based components

  There's a lot of debate in the React community about which are the cases to use
  class based components and function based components, Stephen Grider is one of which
  chooses to use Class based components in every possible ocasion except from when it is
  necessary to display simple content --- when it comes to displaying simple content Stephen
  thinks it is better to use function based components but he does recognizes the community debate.

  Class based components are better for code organization, a single component can have multiple states
  --- this kind of component easier to handle user input --- and this kind of component can understand
  better life-cycle events. 


 */

const App = () => {
  return (
    <div>
      <h1>This is JSX baby</h1>
      <SeasonDisplay />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
