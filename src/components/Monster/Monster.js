import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import './Monster.scss';

const Monster = ({ monster, index }) => {
  return (
    <Element name={`monster-${index}`} className="monster">
      <div className="monster__wrapper">
        <h1 className="monster__name">{monster.name}</h1>
        <div className="monster__image-wrapper">
          <img
            className="monster__image"
            src={monster.images.big}
            alt={`Monster ${monster.name}`}
          />
        </div>
        <div className="monster__content">
          <p className="monster__description">
            {monster.description}
          </p>
          <div className="monster__statictics">
            {monster.statistics.power}
          </div>
        </div>
      </div>
    </Element>
  );
};

Monster.propTypes = {
  monster: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Monster;
