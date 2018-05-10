import React from 'react';
import ReactDOM from 'react-dom';

/*
class Annotation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
    };
  }

  getCursorPosition = (e) => {
    // https://github.com/svrcekmichal/react-sketchpad/blob/master/src/SketchPad.jsx
    // const {top, left} = this.canvas.getBoundingClientRect();
    // return [
    //   e.clientX - left,
    //   e.clientY - top
    // ];
    return [e.pageX, e.pageY];
  }

  onMouseDown = (e) => {
    console.log('onMouseDown');
    console.log(this.getCursorPosition(e));
  }

  render() {
    return (
      <div
        onMouseDown={this.onMouseDown}
      >
        <img src={this.state.src}/>
      </div>
    );
  }
}
*/
// TODO: Move to css?
const imageDivStyle = {
  clear: 'both',
  position: 'relative',
  width: '100%'
}

const Annotation = ({
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
    <div style={{
      position: 'absolute'
    }}>
      {annotation.get('label')}
    </div>
  </div>
)

export default Annotation;
