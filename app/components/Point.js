import React from 'react';
import ReactDOM from 'react-dom';

const Point = ({
   point
}) => (
  <div
    className='point'
    style={{
      left: point.get(0),
      top: point.get(1)
    }}
  >
    {point}
  </div>
)

export default Point;
