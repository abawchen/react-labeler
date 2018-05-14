import { handleActions } from 'redux-actions';
import { AnnotatorState } from '../../constants/models';
import Immutable from 'immutable';
import {
  CRAETE
} from '../../constants/actionTypes';

const annotatorReducers = handleActions(
  {
    SELECT_POINT: (state, { payload }) => {
      let index = payload.event.currentTarget.dataset.index;
      let annotations = state.get('annotations');
      let annotation = annotations.get(index);
      annotations = annotations.remove(index);
      return state
        .set('annotations', annotations)
        .set('annotation', annotation);
    },
    DESELECT_POINT: (state, { payload }) => {
      let annotations = state
        .get('annotations')
        .push(state.get('annotation'));
      return state
        .set('annotations', annotations)
        .set('annotation', Immutable.fromJS({
          id: '',
          points: []
        }));
      // return state;
    },
    MOVE_POINT: (state, { payload }) => {
      return state;
    },
  },
  AnnotatorState
);
export default annotatorReducers;
