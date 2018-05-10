import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Annotator from './components/Annotator';

/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        Hello
        <Annotator/>
      </div>
    );
  }
}
*/

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Annotator />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
