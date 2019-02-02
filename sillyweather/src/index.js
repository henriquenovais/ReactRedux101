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
// Be careful not to confuse the State system with the Props system!
/*
  A 'State' is a JS Object that contains a set of data relevant to an specific component and updating
  that set of data causes the component to rerender almost instantly.
  The 'State' of a component must be initialized at its creation.
  'State' can ONLY be updated by using 'setState'.
   */

class App extends React.Component {
  constructor(props) {
    super(props);

    //This is the ONLY situation in which setState is not used to change
    //a component's state!
    this.state = { lat: null, errorMessage: "" }; //initialize object with null since the latittude is a number and its value has not been defined yet

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //ALWAYS use setState to change a component's 'State'.
        //The only exception to this is when initializing the component in its constructor!
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  //React always required the programmer to define a render method!!
  render() {
    // To understand more about the geolocation api visit: https://developer.mozilla.org/pt-BR/docs/Web/API/Geolocation

    return (
      <div>
        <div>
          Latitude: {this.state.lat}
          <br />
          Error: {this.state.errorMessage}
        </div>
        <SeasonDisplay />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

/*
This is a very important code. Because the 'position' function takes longer to process for the App,
so if the dev wishes to store a value that comes from such function, the dev'll have to create
a mechanism to wait for the response first.  

const App = () => {
  let teste;

  window.navigator.geolocation.getCurrentPosition(
    position => {
      console.log(teste);
      teste = position.coords.latitude;
      console.log(teste);
    },
    err => {
      console.log(err);
    }
  );

  console.log(teste);

  return (
    <div>
      <SeasonDisplay />
    </div>
  );
};
*/
