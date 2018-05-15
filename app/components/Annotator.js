import React from 'react';
import ReactDOM from 'react-dom';
import Annotation from './Annotation';

const Annotator = ({
  aix,
  src,
  annotation,
  annotations,
  onMouseMove,
  onPointMouseDown,
  onPointMouseUp,
  onPolygonMouseDown,
  onPolygonMouseUp,
}) => (
  <div className='annotatorContainer'>
    <img src={src}/>
    <svg
      className='ori'
      onMouseMove={onMouseMove}
    >
      {
        annotations.map((annotation, index) => (
          <Annotation
            key={index}
            aix={index}
            selected={aix == index}
            annotation={annotation}
            onPointMouseDown={onPointMouseDown}
            onPointMouseUp={onPointMouseUp}
            onPolygonMouseDown={onPolygonMouseDown}
            onPolygonMouseUp={onPolygonMouseUp}
          />
        )).toJS()
      }
    </svg>
  </div>
)

export default Annotator;
