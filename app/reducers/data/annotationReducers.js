import { handleActions } from 'redux-actions';
import { AnnotatorState } from '../../constants/models';
import Immutable from 'immutable';
import {
  CRAETE
} from '../../constants/actionTypes';

let coords = {};

const annotatorReducers = handleActions(
  {
    SELECT_POINT: (state, { payload }) => {
      let event = payload.event;
      let aix = event.currentTarget.dataset.aix;
      let pix = event.currentTarget.dataset.pix;
      coords.x = event.pageX;
      coords.y = event.pageY;
      return state
        .set('aix', aix)
        .set('pix', pix);
    },
    DESELECT_POINT: (state, { payload }) => {
      coords = {};
      return state
        .set('aix', -1)
        .set('pix', -1);

        // .set('coords', Immutable.fromJS([]));
    },
    MOVE_POINT: (state, { payload }) => {
      // https://codepen.io/techniq/pen/yVEeOx
      let event = payload.event;
      let aix = event.currentTarget.dataset.aix;
      let pix = event.currentTarget.dataset.pix;
      // if (aix == state.get('aix') && pix == state.get('pix')) {
      if (!!coords.x) {
        let point = state
          .getIn(['annotations', aix, 'points', pix]);
        let xDiff = coords.x - event.pageX;
        let yDiff = coords.y - event.pageY;
        coords.x = event.pageX;
        coords.y = event.pageY;
        let points = state
          .getIn(['annotations', aix, 'points'])
          .setIn([pix, 0], point.get(0) - xDiff)
          .setIn([pix, 1], point.get(1) - yDiff);
        state = state
          .setIn(['annotations', aix, 'points'], points);
      }
      return state;
    },
  },
  AnnotatorState
);
export default annotatorReducers;
