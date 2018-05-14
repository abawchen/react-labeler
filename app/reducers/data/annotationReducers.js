import { handleActions } from 'redux-actions';
import { AnnotatorState } from '../../constants/models';
import Immutable from 'immutable';
import {
  CRAETE
} from '../../constants/actionTypes';

const annotatorReducers = handleActions(
  {
    SELECT_POINT: (state, { payload }) => {
      let event = payload.event;
      let aix = event.currentTarget.dataset.aix;
      let pix = event.currentTarget.dataset.pix;
      return state
        .set('aix', aix)
        .set('pix', pix)
        .set('coords', Immutable.fromJS([event.pageX, event.pageY]));
    },
    DESELECT_POINT: (state, { payload }) => {
      return state
        .set('aix', -1)
        .set('pix', -1)
        .remove('coords');
        // .set('coords', Immutable.fromJS([]));
    },
    MOVE_POINT: (state, { payload }) => {
      // https://codepen.io/techniq/pen/yVEeOx
      let event = payload.event;
      let aix = event.currentTarget.dataset.aix;
      let pix = event.currentTarget.dataset.pix;
      // if (aix == state.get('aix') && pix == state.get('pix')) {
      if (state.has('coords')) {
        let point = state
          .getIn(['annotations', aix, 'points', pix]);
        let xDiff = state.getIn(['coords', 0]) - event.pageX;
        let yDiff = state.getIn(['coords', 1]) - event.pageY;
        
        let points = state
          .getIn(['annotations', aix, 'points'])
          .setIn([pix, 0], point.get(0) - xDiff)
          .setIn([pix, 1], point.get(1) - yDiff);
        state = state
          .set('coords', Immutable.fromJS([event.pageX, event.pageY]))
          .setIn(['annotations', aix, 'points'], points);
      }
      return state;
    },
  },
  AnnotatorState
);
export default annotatorReducers;
