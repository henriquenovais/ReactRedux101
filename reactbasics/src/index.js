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
    return (
    <div>
        <h1>Hello World!</h1>
        <ul>
            <li>Hey</li>
            <li>HEY HEY</li>
            <li>HEY HEY HEY HEY HEY HEY</li>
        </ul>
        <label class="label" for="name">Enter name: </label>
        <input id="name"/>
        <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
    </div>
    );
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
