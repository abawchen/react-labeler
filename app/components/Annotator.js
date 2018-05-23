import React from 'react';
import ReactDOM from 'react-dom';
import Annotation from './Annotation';
import PreAnnotation from './PreAnnotation';

const Annotator = ({
  imageWidth,
  imageHeight,
  hix,
  aix,
  pix,
  src,
  mode,
  preAnnotation,
  annotations,
  onImageLoad,
  onLabelChange,
  onAddPoint,
  onMouseMove,
  onKeyDown,
  onPointMouseDown,
  onPointMouseUp,
  onPointMouseEnter,
  onPointMouseLeave,
  onPolygonMouseDown,
  onPolygonMouseUp,
  onPolygonMouseEnter,
  onPolygonMouseLeave,
  onPrePointMouseEnter,
  onPrePointMouseLeave,
}) => (
  <div className='annotatorContainer'>
    <img
      src={src}
      onLoad={onImageLoad}
    />
    <svg
      className='ori'
      tabIndex='0'
      width={imageWidth}
      height={imageHeight}
      onMouseMove={onMouseMove}
      onKeyDown={onKeyDown}
      onClick={onAddPoint}
    >
      {
        <PreAnnotation
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          aix={-1}
          pix={pix}
          mode={mode}
          preAnnotation={preAnnotation}
          onPrePointMouseEnter={onPrePointMouseEnter}
          onPrePointMouseLeave={onPrePointMouseLeave}
        />
      }
      {
        annotations.map((annotation, index) => (
          <Annotation
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            key={index}
            hix={hix}
            aix={index}
            mode={mode}
            hover={hix === index}
            annotation={annotation}
            onLabelChange={onLabelChange}
            onPointMouseDown={onPointMouseDown}
            onPointMouseUp={onPointMouseUp}
            onPointMouseEnter={onPointMouseEnter}
            onPointMouseLeave={onPointMouseLeave}
            onPolygonMouseDown={onPolygonMouseDown}
            onPolygonMouseUp={onPolygonMouseUp}
            onPolygonMouseEnter={onPolygonMouseEnter}
            onPolygonMouseLeave={onPolygonMouseLeave}
          />
        ))
      }
    </svg>
  </div>
)

export default Annotator;
