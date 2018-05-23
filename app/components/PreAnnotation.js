import React from 'react';
import ReactDOM from 'react-dom';
import {
  getLabelPosition,
  getPathD,
  keyPressHandler,
} from '../utils/annotation';

const PreAnnotation = ({
  imageWidth,
  imageHeight,
  hix,
  aix,
  mode,
  preAnnotation,
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
      display: (aix === -1 && mode === 'ADD_POINT') ? 'block' : 'none'
    }}
  >
    <path
      className='ori'
      style={{
        visibility: hix === aix ? 'visible' : 'hidden'
      }}
      d={getPathD(imageWidth, imageHeight, preAnnotation.points)}
      fill='gray'
      fill-rule='evenodd'
      opacity='0.5'
    />
    <polygon
      data-aix={aix}
      points={preAnnotation.points}
      // onMouseDown={onPolygonMouseDown}
      // onMouseUp={onPolygonMouseUp}
      // onMouseEnter={onPolygonMouseEnter}
      // onMouseLeave={onPolygonMouseLeave}
      // TODO: A bit hacky here.
      // onDoubleClick={() => document.querySelector('#input-' + aix).focus()}
    />
    {
      preAnnotation.points.map((point, index) =>
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
      x={getLabelPosition(preAnnotation.points, 0)}
      y={getLabelPosition(preAnnotation.points, 1)}
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
        value={preAnnotation.label}
        onChange={onLabelChange}
        onKeyPress={keyPressHandler}
      />
    </foreignObject>
  </svg>
)

export default PreAnnotation;
