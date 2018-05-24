import React from 'react';

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
    <rect
      className='overlay'
      width={imageWidth}
      height={imageHeight}
      onMouseDown={onPreAnnotationMouseDown}
      onMouseUp={onPreAnnotationMouseUp}
      onMouseMove={onPreAnnotationMouseMove}
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
