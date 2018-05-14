import { handleActions } from 'redux-actions';
import { AnnotatorState } from '../../constants/models';
import Immutable from 'immutable';
import {
  CRAETE
} from '../../constants/actionTypes';

const annotatorReducers = handleActions(
  {
    SELECT_POINT: (state, { payload }) => {
      let aix = payload.event.currentTarget.dataset.aix;
      let annotations = state.get('annotations');
      let annotation = annotations.get(aix);
      annotations = annotations.remove(aix);
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
    },
    MOVE_POINT: (state, { payload }) => {
      let pix = payload.event.currentTarget.dataset.pix;
      let annotation = state.get('annotation');
      if (annotation.get('id') !== '') {
        let point = annotation.get('points').get(pix);
        // console.log(pix);
        // console.log(point);
        point = point
          .set(0, payload.event.clientX)
          .set(1, payload.event.clientY);
        console.log(point)
        let nextState = state
          .setIn(['annotation', 'points'])
          .set(pix, Immutable.fromJS(point.toJS()));
        console.log(nextState);
      }
      return state;
    },
  },
  AnnotatorState
);
export default annotatorReducers;
