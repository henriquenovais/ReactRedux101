import React from "react";
import ReactDOM from "react-dom";

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
  /*
  COMMENTARY ABOUT LIFE CYCLE FUNCTIONS:

  'componentDidMount()' is part of the life cycle functionalities of React. This method is 
  executed ONCE, one and only one time, after the system detects that the component has been
  properly mounted!


  componentDidMount() {
    console.log(
      "This method executes once after the React detects that the component mounted!"
    );
  }

  'componentDidUpdate()' is part of the life cycle functionalities of React, just like 
  'componentDidMount()'. This method may be executed multiple times, it will be executed
  once for every time the component rerenders!

  DISCLAIMER: The 'render()' method will always be called before 'componentDidUpdate()'
  since that is required in order to rerender the component.

  componentDidUpdate() {
    console.log(
      "This method executes once after the React detects that the component was rerendered!"
    );
  }

  */

  //React always required the programmer to define a render method!!
  render() {
    // To understand more about the geolocation api visit: https://developer.mozilla.org/pt-BR/docs/Web/API/Geolocation

    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    /* Could do this too:
    if (!this.state.lat && !this.state.errorMessage) {
      return <div>LOADING BOYZ, BE CALM</div>;
    }
    */
    return <div>LOADING BOYZ, BE CALM</div>;
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
