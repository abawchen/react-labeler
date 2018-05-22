import React from 'react';
import ReactDOM from 'react-dom';
import Annotation from './Annotation';

const Annotator = ({
  imageWidth,
  imageHeight,
  hix,
  aix,
  src,
  annotation,
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
        annotations.map((annotation, index) => (
          <Annotation
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            key={index}
            hix={hix}
            aix={index}
            hover={hix == index}
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
