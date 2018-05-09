import React from 'react';
import ReactDOM from 'react-dom';

import Annotator from './components/Annotator';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Annotator/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
