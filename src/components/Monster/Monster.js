import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import ProgressBar from '../ProgressBar/ProgressBar';
import { formatMonsterDescription } from '../../helpers/format';
import './Monster.scss';

const Monster = ({
  monster: { name, images, description, statistics },
  index,
}) => {
  return (
    <Element name={`monster-${index}`} className="monster">
      <div className="monster__wrapper">
        <h1 className="monster__name">{name}</h1>
        <div className="monster__content">
          <div className="monster__image-wrapper">
            <img
              className="monster__image"
              src={images.big}
              alt={`Monster ${name}`}
            />
          </div>
          <div className="monster__info">
            <div className="monster__description">
              {formatMonsterDescription(description).map(
                (descriptionItem, index) => {
                  return (
                    <h3
                      className="monster__description-item"
                      key={`description-item-${index}`}
                    >
                      {descriptionItem}
                    </h3>
                  );
                },
              )}
            </div>
            <div className="monster__statictics">
              {Object.keys(statistics).map((key, index) => {
                return (
                  <div
                    key={`statistics-item-${index}`}
                    className="monster__statistics-item"
                  >
                    <span className="monster__statistics-key">
                      {key}
                    </span>
                    <ProgressBar value={statistics[key]} />
                  </div>
                );
              })}
            </div>
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
