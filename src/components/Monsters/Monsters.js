import React from 'react';
import PropTypes from 'prop-types';
import Monster from '../Monster/Monster';
import './Monsters.scss';

const Monsters = ({ monsters }) => {
  return (
    <section className="monsters">
      {monsters.map((monster, index) => {
        return (
          <Monster
            key={`monster-${index}`}
            monster={monster}
            index={index}
          />
        );
      })}
    </section>
  );
};

Monsters.propTypes = {
  monsters: PropTypes.array.isRequired,
};

export default Monsters;
