import React from 'react';
import ReactDOM from 'react-dom';

import Point from './Point';

let getLabelPosition = (points, axis) => {
  return points
    .map(point => point[axis])
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
    .reduce((acc, point, index) => {
      return `${acc} ${index === 0 ? 'M' : 'L'}${point[0]},${point[1]}`
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
  onPointMouseEnter,
  onPointMouseLeave,
  onPolygonMouseDown,
  onPolygonMouseUp,
  onPolygonMouseEnter,
  onPolygonMouseLeave,
}) => (
  <svg
    className='ori'
    style={{
      display: hix == -1 || hix == aix ? 'block' : 'none'
    }}
  >
    <path
      className='ori'
      style={{
        visibility: hix == aix ? 'visible' : 'hidden'
      }}
      d={getPathD(imageWidth, imageHeight, annotation.points)}
      fill='gray'
      fill-rule='evenodd'
      opacity='0.5'
    />
    <polygon
      data-aix={aix}
      points={annotation.points}
      onMouseDown={onPolygonMouseDown}
      onMouseUp={onPolygonMouseUp}
      onMouseEnter={onPolygonMouseEnter}
      onMouseLeave={onPolygonMouseLeave}
      // TODO: A bit hacky here.
      onDoubleClick={() => document.querySelector('#input-' + aix).focus()}
    />
    {
      annotation.points.map((point, index) =>
        <circle
          key={index}
          data-aix={aix}
          data-pix={index}
          cx={point[0]}
          cy={point[1]}
          r='5'
          onMouseDown={onPointMouseDown}
          onMouseUp={onPointMouseUp}
          onMouseEnter={onPointMouseEnter}
          onMouseLeave={onPointMouseLeave}
        />
      )
    }
    <foreignObject
      x={getLabelPosition(annotation.points, 0)}
      y={getLabelPosition(annotation.points, 1)}
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
        value={annotation.label}
        onChange={onLabelChange}
        onKeyPress={keyPressHandler}
      />
    </foreignObject>
  </svg>
)

export default Annotation;
