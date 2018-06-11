import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {G, Path} from '../styles';
import {
  getLabelPosition,
  getDisplayX,
  getDisplayY,
  getDisplayPoints,
  getPathD,
  keyDownHandler,
} from '../utils/annotation';


const LabelInput = styled.input.attrs({
  type: 'text',
  placeholder: 'label me',
})`
  font-size: 12px;
  padding: 2px 4px;
  border: 2px solid rgba(71,80,92,0.8);
  border-radius: 5px;
  text-align: center;
`;

const Annotation = ({
  image,
  hix,
  aix,
  pix,
  mode,
  annotation,
  hover,
  onLabelChange,
  onDeleteAnnotation,
  onPointClick,
  onPointMouseEnter,
  onPointMouseLeave,
  onShapeClick,
  onShapeMouseEnter,
  onShapeMouseLeave,
}) => (
  <G
    display={(hix === -1 || hover) && mode !== 'PRE_ANNOTATION' ? 'block' : 'none'}
  >
    <Path
      visibility={hover ? 'visible' : 'hidden'}
      d={getPathD(image, annotation.points, true)}
    />
    <polygon
      data-aix={aix}
      points={getDisplayPoints(image, annotation.points)}
      onClick={onShapeClick}
      onMouseEnter={onShapeMouseEnter}
      onMouseLeave={onShapeMouseLeave}
    />
    {
      annotation.points.map((point, index) =>
        <circle
          cursor={hover ? 'move' : 'default'}
          r={5}
          key={index}
          data-aix={aix}
          data-pix={index}
          cx={getDisplayX(image, point[0])}
          cy={getDisplayY(image, point[1])}
          onClick={onPointClick}
          onMouseEnter={onPointMouseEnter}
          onMouseLeave={onPointMouseLeave}
        />
      )
    }
    <foreignObject
      x={getLabelPosition(image, annotation.points, 0)}
      y={getLabelPosition(image, annotation.points, 1)}
      width='100%'
      height='20px'
      visibility={hover ? 'visible' : 'hidden'}
    >
      <LabelInput
        innerRef={(input) => input != null && input.focus()}
        id={'input-' + aix}
        data-aix={aix}
        value={annotation.label}
        style={{ width: `${annotation.label.length * 7 < 50 ? 50 : annotation.label.length * 7 > 100 ? 100 : annotation.label.length * 7}px` }}
        onChange={onLabelChange}
        onKeyDown={(e) => keyDownHandler(e, onDeleteAnnotation, aix)}
      />
    </foreignObject>
  </G>
)

export default Annotation;
