import { combineReducers } from 'redux-immutable';
import annotator from './data/annotationReducers';

const rootReducer = combineReducers({
  annotator
});

export default rootReducer;
