import {combineReducers} from 'redux-immutable';
import {reducer as toastrReducer} from 'react-redux-toastr'
import labeler from './data/labelerReducers';

const rootReducer = combineReducers({
  labeler,
  toastr: toastrReducer
});

export default rootReducer;
