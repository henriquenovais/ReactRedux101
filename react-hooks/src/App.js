import React from 'react';
import ChangeBackground from './components/ChangeBackground';
import './App.css';

const App = () => {
  return (
    <div>
      <div className="background">
      </div>
      <div className="button-group">
        <ChangeBackground className="avatar" titleName="Avatar: The Last Airbender"/>
        <ChangeBackground className="codegeass" titleName="Code Geass"/>
        <ChangeBackground className="naruto" titleName="Naruto Shippuden"/>
        <ChangeBackground className="fullmetal" titleName="Fullmetal Alchemist: Brotherhood"/>
      </div>
    </div>


  );
}

export default App;

