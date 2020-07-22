import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Monsters from './components/Monsters/Monsters';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Monsters />
    </div>
  );
};

export default App;
