import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

export default function ProcessBar(props) {
  return (
    <div className="process-component-wrapper" style={{height: `${props.barHeight}px`, backgroundColor: `${props.barColor}`}}>
      <div className="process-bar" style={{height: `${props.barHeight}px`, width: `${props.rate * 100}%`, backgroundColor: `${props.processColor}`}}></div>
    </div>
  )
}

ProcessBar.propTypes = {
  rate: PropTypes.number.isRequired,
  barHeight: PropTypes.number,
  barColor: PropTypes.string,
  processColor: PropTypes.string
};

ProcessBar.defaultProps = {
  barHeight: 3,
  barColor: '#ededed',
  processColor: '#393939'
};
