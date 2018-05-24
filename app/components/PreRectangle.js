import React from 'react';
import { getPathD } from '../utils/annotation';

const PreRectangle = ({
  imageWidth,
  imageHeight,
  aix,
  pix,
  preAnnotation,
  onPreAnnotationMouseDown,
  onPreAnnotationMouseUp,
  onPreAnnotationMouseMove,
}) => (
  <g>
    <path
      className='ori'
      fill='gray'
      fill-rule='evenodd'
      opacity='0.5'
      d={getPathD(imageWidth, imageHeight, true, preAnnotation.points)}
    />
    <rect
      opacity={0}
      width={imageWidth}
      height={imageHeight}
      onMouseDown={onPreAnnotationMouseDown}
      onMouseMove={!!preAnnotation.points.length ? onPreAnnotationMouseMove : null}
    />
    <polygon
      points={preAnnotation.points}
      // XXXX: Not work in rect element!?
      onMouseUp={onPreAnnotationMouseUp}
    />
    {
      preAnnotation.points.map((point, index) =>
        <circle
          r={pix === index ? 8 : 5}
          key={index}
          data-aix={aix}
          data-pix={index}
          cx={point[0]}
          cy={point[1]}
          style={{
            fill: pix === index ? 'lime' : 'white',
            stroke: pix === index ? 'blue' : 'black',
          }}
        />
      )
    }
  </g>
)

export default PreRectangle;
