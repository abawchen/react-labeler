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
  onPointMouseDown,
  onPointMouseUp,
  onPointMouseMove
}) => (
  <div className='annotatorContainer'>
    <img src={src}/>
    <svg className='ori'>
      {
        annotations.map((annotation, index) => (
          <Annotation
            key={index}
            aix={index}
            annotation={annotation}
            onPointMouseDown={onPointMouseDown}
            onPointMouseUp={onPointMouseUp}
            onPointMouseMove={onPointMouseMove}
          />
        )).toJS()
      }
      /*
      {
        <Annotation
          annotation={annotation}
        />
      }
      */
    </svg>
  </div>
)

export default Annotator;
