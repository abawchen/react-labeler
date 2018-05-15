import React from 'react';
import ReactDOM from 'react-dom';
import Annotation from './Annotation';

const Annotator = ({
  hix,
  aix,
  src,
  annotation,
  annotations,
  onLabelChange,
  onMouseMove,
  onPointMouseDown,
  onPointMouseUp,
  onPolygonMouseDown,
  onPolygonMouseUp,
  onPolygonMouseEnter,
  onPolygonMouseLeave,
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
            hix={hix}
            aix={index}
            hover={hix == index}
            annotation={annotation}
            onLabelChange={onLabelChange}
            onPointMouseDown={onPointMouseDown}
            onPointMouseUp={onPointMouseUp}
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
