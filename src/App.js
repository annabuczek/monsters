import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMonsters } from './redux/monsters/actions';
import Navigation from './components/Navigation/Navigation';
import Monsters from './components/Monsters/Monsters';
import './App.scss';

const App = ({ fetchMonsters }) => {
  useEffect(() => {
    fetchMonsters();
  }, []);
  return (
    <div className="App">
      <Navigation />
      <Monsters />
    </div>
  );
};

export default connect(null, { fetchMonsters })(App);
