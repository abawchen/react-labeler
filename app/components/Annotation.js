import React from 'react';
import ReactDOM from 'react-dom';
import {
  getLabelPosition,
  getPathD,
  keyPressHandler,
} from '../utils/annotation';


const Annotation = ({
  imageWidth,
  imageHeight,
  hix,
  aix,
  mode,
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
      display: (hix === -1 || hover) && mode !== 'ADD_POINT' ? 'block' : 'none'
    }}
  >
    <path
      className='ori'
      style={{
        visibility: hover ? 'visible' : 'hidden'
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
