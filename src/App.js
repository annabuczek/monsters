import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMonsters } from './redux/monsters/actions';
import Navigation from './components/Navigation/Navigation';
import Monsters from './components/Monsters/Monsters';
import './App.scss';

const App = ({ monsters, fetchMonsters }) => {
  useEffect(() => {
    fetchMonsters();
  }, [fetchMonsters]);

  return (
    <div className="App">
      <Navigation navItemsNumber={monsters.length} />
      <Monsters monsters={monsters} />
    </div>
  );
};

export default connect(
  ({ monsters }) => ({
    monsters: monsters.data,
  }),
  { fetchMonsters },
)(App);
