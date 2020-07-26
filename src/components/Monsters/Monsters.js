import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Monster from '../Monster/Monster';
import './Monsters.scss';

const Monsters = ({ monsters }) => {
  useEffect(() => {
    const sliders = document.querySelectorAll('.slide-in');

    const appearOptions = {
      treshold: 1,
    };

    const appearOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions,
    );

    sliders.forEach((slider) => {
      appearOnScroll.observe(slider);
    });
  });

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
