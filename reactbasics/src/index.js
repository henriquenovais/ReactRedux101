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
A React component is a function or a class.
*/

const App = () => {
    return <div><h1>Hi there!</h1></div>;
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
