import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
/*
 JSX is JavaScript which is converted to HTML through the React application

 JavaScript may have many different functionallities embbeded in its library depending
 on which version of EcmaScript you are using, if the EcmaScript version is more recent 
 there will be more and more tools will be avaiable for the developer.
 However, newer versions of EcmaScript are not supported by most browsers(the most efficient 
 version of ES as of now - january of 2019 - is ES2015 as it works on most browsers and has a  
 whole lot of useful tools).
 In order to cope with such dificulties Babel was created as a JavaScript interpreter that converts newer
 ES versions(which are the fundamentals of JS) into ES5 so that it facilitates the browser updating.
 
 React know what a component is and how to make components work together.

 ReactDOM knows how to take a component and make it show up in the DOM


 React is based on three different very important packs:
 Babel, Webpack and Dev Server.

*/

function transform(offset) {
  const cos = Math.cos(offset);
  const sin = Math.sin(offset);
  return { transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)` };
}

class App extends Component {
    state = { styleOne: {}, styleTwo: {} };
  
    onMouseMove = (event) => {
      this.setState({
        styleOne: transform(-event.clientX / event.clientY),
        styleTwo: transform(event.clientX / event.clientY)
      })
    }
   
    render(){
      return <div onMouseMove={this.onMouseMove}>
        <div className="panel"  style={this.state.styleOne} />
        <div className="panel"  style={this.state.styleTwo} />
      </div>  
    }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);


export default App;
