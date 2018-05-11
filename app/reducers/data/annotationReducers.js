import { handleActions } from 'redux-actions';
import { AnnotatorState } from '../../constants/models';
import {
  CRAETE
} from '../../constants/actionTypes';

const annotatorReducers = handleActions(
  {
    SELECT_POINT: (state, { payload }) => {
      /*
      console.log(state);
      console.log(payload.event.clientX, payload.event.clientY);
      */
    }
  },
  AnnotatorState
);
export default annotatorReducers;
