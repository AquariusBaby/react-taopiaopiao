import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

const LENGTH = 5,
  CLS_ON = 'on',
  CLS_HALF = 'half',
  CLS_OFF = 'off';

export default function Star(props) {
  return (
    <div className={`star-component-wrapper ${starType(props.size)}`}>
      {
        itemClasses(props.score).map((item, index) => (
          <span className={`star-item ${item}`} key={index}></span>
        ))
      }
    </div>
  )
}

function starType(size) {
  return `star-${size}`
}

function itemClasses(score) {
  let result = [],
    count = Math.floor(score),
    hasDecimal = count % 1 !== 0,
    integer = Math.floor(score)
  ;
  for (let i = 0; i < integer; i++) {
    result.push(CLS_ON);
  }
  if (hasDecimal) {
    result.push(CLS_HALF);
  }
  while (result.length < LENGTH) {
    result.push(CLS_OFF);
  }
  return result;
}

Star.propTypes = {
  size: PropTypes.number,
  score: PropTypes.number
};

Star.defaultProps = {
  size: 0,
  score: 0
};
