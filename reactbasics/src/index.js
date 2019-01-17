// Import the React and ReactDOM libraries
import React from 'react'; 
import ReactDOM from 'react-dom';

/*
In NodeJS, a possible equivalent would be:
const Compass = require('compass');

Importing modules is a functionality introduced in ES6(ES2015) while
requiring modules is a CommonJS functionality. Its all about the version
of JavaScript that you are using.
*/ 

// Create a react component
/*
A React component is a function or a class that has information
that will be converted into HTML through Babel.
The JavaScript that is used to create HTML components is called JSX.
*/


const App = () => {
    // const buttonText = "I'm blue";
    /*
    In order to refer to a JavaScript variable in JSX
    it is necessary to use {}. So, when referring to a JavaScript
    object in JSX it'll be necessary to use javaScriptObject.propertie.

    EXAMPLE:
    const object = {text: 'Hi there!'};
    In order to refer to this object >>>>> AS TEXT <<<< in JSX it is required to do:
    {object.text}

    */ 
    let buttonText;
    // buttonText = 'Click me!';
    // buttonText = ['Hi ', 'There!'];
    // buttonText = 12345;
    buttonText = {object: 'Click me!'};

    return (
    <div>
        <h1>Hello World!</h1>
        <ul>
            <li>Hey</li>
            <li>HEY HEY</li>
            <li>HEY HEY HEY HEY HEY HEY</li>
        </ul>
        <label className="label" htmlFor="name">Enter name: </label>
        <input id="name"/>
        <button style={{backgroundColor: 'blue', color: 'white'}}>
        {buttonText.object}
        </button>
    </div>
    );
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
