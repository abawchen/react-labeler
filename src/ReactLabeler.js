import React from 'react';
import {Provider} from 'react-redux';
import ReduxToastr from 'react-redux-toastr'
import store from './store';
import Main from './components/Main';

window.addEventListener('resize', () => {
  console.log('resize');
  let img = document.getElementById("img");
  console.log(img.width);
});

class ReactLabeler extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Main/>
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

export default ReactLabeler;
