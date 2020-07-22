import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import './Monster.scss';

const Monster = ({ monster, index }) => {
  return (
    <Element name={`monster-${index}`} className="monster">
      <h1 className="monster__name">{monster.name}</h1>
    </Element>
  );
};

Monster.propTypes = {
  monster: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Monster;
