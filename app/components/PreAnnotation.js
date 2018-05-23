import React from 'react';

const PreAnnotation = ({
  imageWidth,
  imageHeight,
  aix,
  pix,
  mode,
  preAnnotation,
  onPrePointMouseEnter,
  onPrePointMouseLeave,
  onPrePointClick,
}) => (
  <svg
    className='ori'
    style={{
      display: mode === 'ADD_POINT' ? 'block' : 'none'
    }}
  >
    {
      preAnnotation.points.map((curPoint, index) => {
        if (index === 0) {
          return;
        }
        const prePoint = preAnnotation.points[index - 1];
        return (
          <line
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
          r={ pix === index ? 8 : 5 }
          key={index}
          data-aix={aix}
          data-pix={index}
          cx={point[0]}
          cy={point[1]}
          onMouseEnter={index === 0 && onPrePointMouseEnter}
          onMouseLeave={index === 0 && onPrePointMouseLeave}
          onClick={index === 0 && onPrePointClick}
          style={{
            fill: pix === index ? 'lime' : 'white',
            stroke: pix === index ? 'blue' : 'black',
          }}
        />
      )
    }
  </svg>
)

export default PreAnnotation;
