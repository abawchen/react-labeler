import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import css from './style.css';
import store from './store';
import Main from './components/Main';


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
