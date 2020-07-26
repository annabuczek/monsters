import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { formatStatisticsValue } from '../../helpers/format';
import './ProgressBar.scss';

const ProgressBar = ({ value }) => {
  const formattedValue = formatStatisticsValue(value);
  const [style, setStyle] = useState({});

  useEffect(() => {
    const progress = document.querySelector(
      `#grow-progress-${formattedValue}`,
    );

    const newStyle = {
      opacity: 1,
      width: `${formattedValue}%`,
    };

    const appearOptions = {
      treshold: 1,
    };

    const appearOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            setStyle(newStyle);
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions,
    );

    appearOnScroll.observe(progress);
  });
  return (
    <div className="progress-bar">
      <div
        className="progress-bar__progress"
        id={`grow-progress-${formattedValue}`}
        style={style}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ProgressBar;
