import React from 'react';
import ReactDOM from 'react-dom';

import Point from './Point';

const Annotation = ({
  annotation
}) => (
  <svg className='ori'>
    <polygon
      points={annotation.get('points').toJS()}
    />
    {
      annotation.get('points').map((point, index) =>
        <circle
          key={index}
          cx={point.get(0)}
          cy={point.get(1)}
          r='5'
        />
      )
    }
    {annotation.get('label')}
  </svg>
)

export default Annotation;
