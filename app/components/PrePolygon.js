import React from 'react';

const PrePolygon = ({
  imageWidth,
  imageHeight,
  aix,
  pix,
  preAnnotation,
  onAddPoint,
  onPrePointMouseEnter,
  onPrePointMouseLeave,
  onPrePointClick,
}) => (
  <g>
    <rect
      className='overlay'
      width={imageWidth}
      height={imageHeight}
      onClick={onAddPoint}
    />
    {
      preAnnotation.points.map((curPoint, index) => {
        if (index === 0) {
          return;
        }
        const prePoint = preAnnotation.points[index - 1];
        return (
          <line
            key={index}
            x1={prePoint[0]}
            y1={prePoint[1]}
            x2={curPoint[0]}
            y2={curPoint[1]}
          />
        )
      })
    }
    {
      preAnnotation.points.map((point, index) =>
        <circle
          r={pix === index ? 8 : 5}
          key={index}
          data-aix={aix}
          data-pix={index}
          cx={point[0]}
          cy={point[1]}
          onMouseEnter={index === 0 ? onPrePointMouseEnter : null}
          onMouseLeave={index === 0 ? onPrePointMouseLeave : null}
          onClick={index === 0 ? onPrePointClick : null}
          style={{
            fill: pix === index ? 'lime' : 'white',
            stroke: pix === index ? 'blue' : 'black',
          }}
        />
      )
    }
  </g>
)

export default PreAnnotation;
