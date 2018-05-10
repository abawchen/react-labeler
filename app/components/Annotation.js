import React from 'react';
import ReactDOM from 'react-dom';

import Point from './Point';

const Annotation = ({
  annotation
}) => (
  <svg style={{
    position: 'absolute',
    left: 0,
    top: 0
  }}>
    <polygon
      points={annotation.get('points').toJS()}
    />
    {
      annotation.get('points').map((point, index) =>
        //<Point key={index} point={point}/>
        <circle
          key={index}
          cx={point.get(0)}
          cy={point.get(1)}
          r='5'
          stroke='black'
          fill='red'
        />
      ) 
    }
    {annotation.get('label')}
  </svg>
)

export default Annotation;
