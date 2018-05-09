import React from 'react';
import ReactDOM from 'react-dom';

class Annotator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
    };
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

export default Annotator;
