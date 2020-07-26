import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMonsters } from './redux/monsters/actions';
import Navigation from './components/Navigation/Navigation';
import Monsters from './components/Monsters/Monsters';
import './App.scss';

export const App = ({ monsters, error, fetching, fetchMonsters }) => {
  useEffect(() => {
    fetchMonsters();
  }, [fetchMonsters]);

  const renderContent = () => {
    if (fetching) {
      return (
        <div className="app--fetching">
          <h3>Loading Monsters...</h3>
        </div>
      );
    } else if (error) {
      return (
        <div className="app--error">
          <h3>
            Could not load Monsters, check your connection and try
            again
          </h3>
        </div>
      );
    } else {
      return (
        <div className="app">
          <Navigation navItemsNumber={monsters.length} />
          <Monsters monsters={monsters} />
        </div>
      );
    }
  };
  return renderContent();
};

App.propTypes = {
  monsters: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  fetchMonsters: PropTypes.func.isRequired,
};

export default connect(
  ({ monsters }) => ({
    monsters: monsters.data,
    error: monsters.error,
    fetching: monsters.fetching,
  }),
  { fetchMonsters },
)(App);
