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

let keyPressHandler = (event) => {
   if (event.key == 'Enter') {
     event.target.blur();
   }
}

const Annotation = ({
  aix,
  annotation,
  hover,
  onLabelChange,
  onPointMouseDown,
  onPointMouseUp,
  onPolygonMouseDown,
  onPolygonMouseUp,
  onPolygonMouseEnter,
  onPolygonMouseLeave,
}) => (
  <svg className='ori'>
    <polygon
      data-aix={aix}
      points={annotation.get('points', []).toJS()}
      onMouseDown={onPolygonMouseDown}
      onMouseUp={onPolygonMouseUp}
      onMouseEnter={onPolygonMouseEnter}
      onMouseLeave={onPolygonMouseLeave}
      // TODO: A bit hacky here.
      onDoubleClick={() => document.querySelector('#input-' + aix).focus()}
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
        visibility: hover ? 'visible' : 'hidden'
      }}
    >
      <input
        type='text'
        className='labelInput'
        placeholder='label me'
        id={'input-' + aix}
        data-aix={aix}
        value={annotation.get('label')}
        onChange={onLabelChange}
        onKeyPress={keyPressHandler}
      />
    </foreignObject>
  </svg>
)

export default Annotation;
