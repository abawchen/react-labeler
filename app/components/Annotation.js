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

let getPathD = (imageWidth, imageHeight, points) => {
  let d = `M0,0 L${imageWidth},0 L${imageWidth},${imageHeight} L0,${imageHeight} z`;
  d += points
    .reduce((acc, p, i) => {
      return `${acc} ${i === 0 ? 'M' : 'L'}${p.get(0)},${p.get(1)}`
    }, '');
  d += ' z';
  return d;
}

const Annotation = ({
  imageWidth,
  imageHeight,
  hix,
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
  <svg
    className='ori'
    style={{
      visibility: hix == -1 || hix == aix ? 'visible' : 'hidden'
    }}
  >
    <path
      className='ori'
      style={{
        visibility: hix == aix ? 'visible' : 'hidden'
      }}
      d={getPathD(imageWidth, imageHeight, annotation.get('points', []))}
      fill='gray'
      fill-rule='evenodd'
      opacity='0.5'
    />
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
      height='20'
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
