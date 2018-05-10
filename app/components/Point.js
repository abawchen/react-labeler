import React from 'react';
import ReactDOM from 'react-dom';

const Point = ({
   point
}) => (
  <div
    className='point'
    //TODO: Move to css
    style={{
      width: '10px',
      height: '10px',
      background: 'red',
      borderRadius: '5px',
      position: 'absolute',
      left: point.get(0),
      top: point.get(1)
    }}
  >
    {point}
  </div>
)

export default Point;
