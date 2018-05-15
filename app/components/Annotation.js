import React from 'react';
import ReactDOM from 'react-dom';

import Point from './Point';

const Annotation = ({
  aix,
  annotation,
  onPointMouseDown,
  onPointMouseUp,
  onPolygonMouseDown,
  onPolygonMouseUp,
}) => (
  <svg className='ori'>
    <polygon
      data-aix={aix}
      points={annotation.get('points', []).toJS()}
      onMouseDown={onPolygonMouseDown}
      onMouseUp={onPolygonMouseUp}
    />
    {
      annotation.get('points', []).map((point, index) =>
        <circle
          key={index}
          data-aix={aix}
          data-pix={index}
          cx={point.get(0)}
          cy={point.get(1)}
          r='5'
          onMouseDown={onPointMouseDown}
          onMouseUp={onPointMouseUp}
        />
      )
    }
    {annotation.get('label')}
  </svg>
)

export default Annotation;
