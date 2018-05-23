import React from 'react';

const PreAnnotation = ({
  imageWidth,
  imageHeight,
  aix,
  pix,
  mode,
  annotationShape,
  preAnnotation,
  onPreAnnotationMouseDown,
  onPreAnnotationMouseUp,
  onPreAnnotationMouseMove,
  onPrePointMouseEnter,
  onPrePointMouseLeave,
  onPrePointClick,
}) => (
  <svg
    className='ori'
    style={{
      display: mode === 'PRE_ANNOTATION' ? 'block' : 'none'
    }}
    // onMouseDown={annotationShape !== 'polygon' && onPreAnnotationMouseDown}
    // onMouseUp={annotationShape !== 'polygon' && onPreAnnotationMouseUp}
    // onMouseMove={annotationShape !== 'polygon' && onPreAnnotationMouseMove}
  >
    {
      annotationShape === 'polygon'
        ? preAnnotation.points.map((curPoint, index) => {
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
        : null
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
  </svg>
)

export default PreAnnotation;
