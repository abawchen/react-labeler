import React from 'react';
import ReactDOM from 'react-dom';

const Point = ({
  annotation,
  point,
  onPointMouseDown,
  onPointMouseUp,
  onPointMouseMove,
}) => (
  <circle
    cx={point.get(0)}
    cy={point.get(1)}
    r='5'
    data-aid={annotation.get('id')}
    onMouseDown={onPointMouseDown}
    onMouseUp={onPointMouseUp}
    onMouseMove={onPointMouseMove}
  />
)

export default Point;
