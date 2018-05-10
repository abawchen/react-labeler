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
const temp = 'https://goo.gl/9nhdu1';
const Annotation = ({
  src
}) => (
  <div>
    <img src={src}/>
  </div>
)

export default Annotation;
