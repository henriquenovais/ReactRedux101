/*
This document has the purpose of comparing 
JSX to actual HTML in order to better understand
the differences and simmilarities of both.
*/
/*

DIFFERENCE ONE
An HTML propertie is converted to a JS Object. 
Example:
HTML
<input style="background-color: red; color: white;">Submit</input>
JSX
<input style={{backgroundColor: 'red', color: 'white' }}>Submit</input>

DIFFERENCE TWO:

The class propertie in HTML becomes className. This avoid colisions
between JavaScript and HTML since both deal with class properties.
*/ 
import React from 'react';
import ReactDOM from 'react-dom';

const buttonText = "I'M BLUE";

const App = () => {
    return(
    <div>
        <label className="label" for="name">Enter name:</label>
        <input id="name"/>
        <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
     </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root');
);