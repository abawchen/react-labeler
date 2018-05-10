import React from 'react';
import ReactDOM from 'react-dom';

import Point from './Point';

const Annotation = ({
  annotation
}) => (
  <div style={{
    position: 'absolute',
    left: 0,
    top: 0
  }}>
    {
      annotation.get('points').map((point, index) =>
        <Point key={index} point={point}/>  
      ) 
    }
    {annotation.get('label')}
  </div>
)

export default Annotation;
