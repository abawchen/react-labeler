import React from 'react';
import ReactDOM from 'react-dom';
import Annotation from './Annotation';
import PrePolygon from './PrePolygon';
import PreRectangle from './PreRectangle';

const Labeler = ({
  image,
  hix,
  aix,
  pix,
  src,
  mode,
  annotationShape,
  preAnnotation,
  annotations,
  onImageLoad,
  onLabelChange,
  onDeleteAnnotation,
  onAddPoint,
  onMouseMove,
  onKeyDown,
  onPointClick,
  onPointMouseEnter,
  onPointMouseLeave,
  onShapeClick,
  onShapeMouseEnter,
  onShapeMouseLeave,
  onPreAnnotationMouseDown,
  onPreAnnotationMouseUp,
  onPreAnnotationMouseMove,
  onPrePointMouseEnter,
  onPrePointMouseLeave,
  onPrePointClick,
}) => (
  <div className='labelerContainer'>
    <img
      id='img'
      src={image.src}
      onLoad={onImageLoad}
    />
    <svg
      className='ori'
      tabIndex='0'
      width={image.width}
      height={image.height}
      onMouseMove={mode.startsWith('MOVE') ? onMouseMove : null}
      onKeyDown={hix === -1 ? onKeyDown : null}
    >
      {
        mode === 'PRE_ANNOTATION'
          ? annotationShape === 'polygon'
            ? <PrePolygon
                image={image}
                aix={-1}
                pix={pix}
                preAnnotation={preAnnotation}
                onAddPoint={onAddPoint}
                onPrePointMouseEnter={onPrePointMouseEnter}
                onPrePointMouseLeave={onPrePointMouseLeave}
                onPrePointClick={onPrePointClick}
              />
            : <PreRectangle
                image={image}
                aix={-1}
                pix={pix}
                preAnnotation={preAnnotation}
                onPreAnnotationMouseDown={onPreAnnotationMouseDown}
                onPreAnnotationMouseUp={onPreAnnotationMouseUp}
                onPreAnnotationMouseMove={onPreAnnotationMouseMove}
              />
          : null
      }
      {
        annotations.map((annotation, index) => (
          <Annotation
            image={image}
            key={index}
            hix={hix}
            aix={index}
            mode={mode}
            hover={hix === index}
            annotation={annotation}
            onDeleteAnnotation={onDeleteAnnotation}
            onLabelChange={onLabelChange}
            onPointClick={onPointClick}
            onPointMouseEnter={onPointMouseEnter}
            onPointMouseLeave={onPointMouseLeave}
            onShapeClick={onShapeClick}
            onShapeMouseEnter={onShapeMouseEnter}
            onShapeMouseLeave={onShapeMouseLeave}
          />
        ))
      }
    </svg>
  </div>
)

export default Labeler;
