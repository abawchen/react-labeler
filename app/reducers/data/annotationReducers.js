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
      let pix = payload.event.currentTarget.dataset.pix;
      //let annotations = state.get('annotations');
      /*
      let annotation = annotations.get(aix);
      annotations = annotations.remove(aix);
      */
      return state
        .set('aix', aix)
        .set('pix', pix);
        //.set('annotations', annotations)
        //.set('annotation', annotation);
    },
    DESELECT_POINT: (state, { payload }) => {
      return state
        .set('aix', -1)
        .set('pix', -1);
      /*
      let annotations = state
        .get('annotations')
        .push(state.get('annotation'));
      return state
        .set('annotations', annotations)
        .set('annotation', Immutable.fromJS({
          id: '',
          points: []
        }));
      */
    },
    MOVE_POINT: (state, { payload }) => {
      let aix = payload.event.currentTarget.dataset.aix;
      let pix = payload.event.currentTarget.dataset.pix;
      if (aix == state.get('aix') && pix == state.get('pix')) {
        let points = state
          .getIn(['annotations', aix, 'points'])
          .setIn([pix, 0], payload.event.clientX)
          .setIn([pix, 1], payload.event.clientY);
        state = state
          .setIn(['annotations', aix, 'points'], points);
      }
      return state;
    },
  },
  AnnotatorState
);
export default annotatorReducers;
