import {combineReducers} from 'redux-immutable';
import {reducer as toastrReducer} from 'react-redux-toastr'
import annotator from './data/annotationReducers';

const rootReducer = combineReducers({
  annotator,
  toastr: toastrReducer
});

export default rootReducer;
