import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ReduxToastr from 'react-redux-toastr'
import store from './store';
import Main from './components/Main';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import css from './style.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Main />
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="bottom-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
          />
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

