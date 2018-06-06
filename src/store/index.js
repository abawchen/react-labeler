import {default as store} from './configureStore';
import {onScreenResize} from '../actions';

window.addEventListener('resize', (event) => {
  store.dispatch(onScreenResize({ event }));
});

export default store;
