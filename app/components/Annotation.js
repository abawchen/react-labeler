import React from 'react';
import ReactDOM from 'react-dom';

import Point from './Point';

const Annotation = ({
  aix,
  annotation,
  onPointMouseDown,
  //onPointMouseUp,
  onPointMouseMove
}) => (
  <svg className='ori'>
    <polygon
      points={annotation.get('points', []).toJS()}
    />
    {
      annotation.get('points', []).map((point, index) =>
        <circle
          key={index}
          data-aix={aix}
          data-pix={index}
          cx={point.get(0)}
          cy={point.get(1)}
          r='10'
          onMouseDown={onPointMouseDown}
          //onMouseUp={onPointMouseUp}
          onMouseMove={onPointMouseMove}
        />
      )
    }
    {annotation.get('label')}
  </svg>
)

export default Annotation;
