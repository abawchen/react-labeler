import React from 'react';
import ReactDOM from 'react-dom';

import Annotation from './Annotation';
/*
  getCursorPosition = (e) => {
    // https://github.com/svrcekmichal/react-sketchpad/blob/master/src/SketchPad.jsx
    // const {top, left} = this.canvas.getBoundingClientRect();
    // return [
    //   e.clientX - left,
    //   e.clientY - top
    // ];
    return [e.pageX, e.pageY];
*/

const Annotator = ({
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
