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
  onMouseMove,
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
      width={imageWidth}
      height={imageHeight}
      onMouseMove={onMouseMove}
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
        )).toJS()
      }
    </svg>
  </div>
)

export default Annotator;
