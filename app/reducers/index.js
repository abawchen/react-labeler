import { combineReducers } from 'redux-immutable';
import annotation from './data/annotationReducers';

const rootReducer = combineReducers({
  annotation
});

export default rootReducer;
