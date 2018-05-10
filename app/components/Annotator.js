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

// TODO: Move to css?
const imageDivStyle = {
  clear: 'both',
  position: 'relative',
  width: '100%'
}

const Annotator = ({
  src,
  annotation,
  annotations
}) => (
  <div style={imageDivStyle}>
    <img src={src}/>
    {
      annotations.map((annotation, index) => (
        <div>
          {annotation.label}
        </div>
      )).toJS()
    }
    <Annotation annotation={annotation}/>
  </div>
)

export default Annotator;
