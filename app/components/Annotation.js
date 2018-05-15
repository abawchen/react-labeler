import React from 'react';
import ReactDOM from 'react-dom';

import Point from './Point';

let getLabelPosition = (points, axis) => {
  return points
    .map(p => p.get(axis))
    .reduce((acc, cur) =>
      axis === 0
      ? Math.max(acc, cur) + 5
      : Math.min(acc, cur) );
}

const Annotation = ({
  aix,
  annotation,
  selected,
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
    <foreignObject
      x={getLabelPosition(annotation.get('points'), 0)}
      y={getLabelPosition(annotation.get('points'), 1)}
      width='100'
      height='100'
      style={{
        visibility: 'visible'
        // visibility: selected ? 'visible' : 'hidden'
      }}
    >
      <div>
        {annotation.get('label')}
      </div>
    </foreignObject>
  </svg>
)

export default Annotation;
