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
      console.log('SELECT_POINT');
    },
    DESELECT_POINT: (state, { payload }) => {
      console.log('DESELECT_POINT');
    },
    MOVE_POINT: (state, { payload }) => {

    },
  },
  AnnotatorState
);
export default annotatorReducers;
