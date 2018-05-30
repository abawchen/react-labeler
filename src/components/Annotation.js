import React from 'react';
import ReactDOM from 'react-dom';
import {
  getLabelPosition,
  getPathD,
  keyDownHandler,
} from '../utils/annotation';


const Annotation = ({
  imageWidth,
  imageHeight,
  hix,
  aix,
  pix,
  mode,
  annotation,
  hover,
  onLabelChange,
  onDeleteAnnotation,
  onPointMouseDown,
  onPointMouseUp,
  onPointMouseEnter,
  onPointMouseLeave,
  onPolygonMouseDown,
  onPolygonMouseUp,
  onPolygonMouseEnter,
  onPolygonMouseLeave,
}) => (
  <g
    className='ori'
    style={{
      display: (hix === -1 || hover) && mode !== 'PRE_ANNOTATION' ? 'block' : 'none'
    }}
  >
    <path
      className='ori'
      style={{
        visibility: hover ? 'visible' : 'hidden'
      }}
      d={getPathD(imageWidth, imageHeight, annotation.points, true)}
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
    />
    {
      annotation.points.map((point, index) =>
        <circle
          style={{
            cursor: hover ? 'move' : 'default'
          }}
          r={5}
          key={index}
          data-aix={aix}
          data-pix={index}
          cx={point[0]}
          cy={point[1]}
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
      width='100%'
      height='20'
      style={{
        visibility: hover ? 'visible' : 'hidden'
      }}
    >
      <input
        type='text'
        className='labelInput'
        placeholder='label me'
        // https://stackoverflow.com/a/36925998/9041712
        ref={(input) => input != null && input.focus()}
        id={'input-' + aix}
        data-aix={aix}
        value={annotation.label}
        style={{ width: `${annotation.label.length * 7 < 50 ? 50 : annotation.label.length * 7 > 100 ? 100 : annotation.label.length * 7}px` }}
        onChange={onLabelChange}
        onKeyDown={(e) => keyDownHandler(e, onDeleteAnnotation, aix)}
      />
    </foreignObject>
  </g>
)

export default Annotation;
