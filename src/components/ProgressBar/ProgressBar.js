import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { formatStatisticsValue } from '../../helpers/format';
import './ProgressBar.scss';

const ProgressBar = ({ value }) => {
  const formattedValue = formatStatisticsValue(value);
  const [style, setStyle] = useState({});

  useEffect(() => {
    const newStyle = {
      opacity: 1,
      width: `${formattedValue}%`,
    };
    setStyle(newStyle);
  }, [formattedValue]);
  return (
    <div className="progress-bar">
      <div className="progress-bar__progress" style={style}></div>
      <span className="progress-bar__value">{formattedValue}%</span>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ProgressBar;
