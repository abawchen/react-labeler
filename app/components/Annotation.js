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
    {
      annotation.get('points').map((point, index) =>
        <Point key={index} point={point}/>  
      ) 
    }
    <polygon
      points={annotation.get('points').toJS()}
    >
    </polygon>
    {annotation.get('label')}
  </svg>
)

export default Annotation;
