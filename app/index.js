import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import css from './style.css';
import store from './store';
import Main from './components/Main';

/*
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
*/
const { Component } = React;
const { render } = ReactDOM;
// const styled = styled.default;

/*
const Svg = styled.svg`
  border: 1px solid #ddd;
  width: 100%;
  height: 400px;
`;
*/
class Node extends Component {
  state = {
    x: this.props.x,
    y: this.props.y
  };

  handleMouseDown = (e) => {
    this.coords = {
      x: e.pageX,
      y: e.pageY
    }
    // document.addEventListener('mousemove', this.handleMouseMove);
  };

  handleMouseUp = () => {
    // document.removeEventListener('mousemove', this.handleMouseMove);
    this.coords = {};
  };

  handleMouseMove = (e) => {
    console.log(this.coords.x);
    if (!this.coords.x) {
       return;
    }
    const xDiff = this.coords.x - e.pageX;
    const yDiff = this.coords.y - e.pageY;

    this.coords.x = e.pageX;
    this.coords.y = e.pageY;

    this.setState({
      x: this.state.x - xDiff,
      y: this.state.y - yDiff
    });
  };

  render() {
    const { x, y } = this.state;
    return (
      <circle
        r="5"
        cx={x}
        cy={y}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      />
    )
  }
}

class App extends Component {
  render() {
    return (
      <svg>
        <Node x={20} y={20} />
        <Node x={60} y={60} />
        <Node x={100} y={100} />
        <Node x={140} y={140} />
      </svg>
    )
  }
}

render(<App />, document.getElementById('app'));
