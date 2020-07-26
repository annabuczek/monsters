import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import './Navigation.scss';

const Navigation = ({ navItemsNumber }) => {
  const navigationItems = Array.from(
    Array(navItemsNumber),
    (_, i) => i + 1,
  );

  return (
    <nav className="navigation">
      {navigationItems.map((navItem, index) => {
        return (
          <Link
            key={`nav-item-${navItem}`}
            className="navigation__item"
            activeClass="navigation__item--active"
            to={`monster-${index}`}
            spy={true}
            smooth="easeOut"
            offset={0}
            duration={500}
          >
            {navItem}
          </Link>
        );
      })}
    </nav>
  );
};

Navigation.propTypes = {
  navItemsNumber: PropTypes.number.isRequired,
};

export default Navigation;
