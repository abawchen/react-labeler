import {default as store} from './configureStore';
import {onScreenResize} from '../actions';

window.addEventListener('resize', (event) => {
  let image = document.getElementById('img');
  store.dispatch(onScreenResize({ image }));
});

export default store;
