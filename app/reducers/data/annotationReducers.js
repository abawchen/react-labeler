import { handleActions } from 'redux-actions';
import { AnnotatorState } from '../../constants/models';
import Immutable from 'immutable';
import {
  CRAETE
} from '../../constants/actionTypes';


const annotatorReducers = handleActions(
  {
    SELECT_POINT: (state, { payload }) => {
      let e = payload.event;
      return state
        .setIn(['coords', 'x'], e.pageX)
        .setIn(['coords', 'y'], e.pageY)
        .set('aix', e.currentTarget.dataset.aix)
        .set('pix', e.currentTarget.dataset.pix);
    },
    DESELECT_POINT: (state, { payload }) => {
      return state
        .removeIn(['coords', 'x'])
        .set('aix', -1)
        .set('pix', -1);
    },
    MOVE_POINT: (state, { payload }) => {
      // https://codepen.io/techniq/pen/yVEeOx
      if (!state.hasIn(['coords', 'x'])) {
        return state;
      }
      let e = payload.event;
      let aix = state.get('aix');
      let pix = state.get('pix');
      let point = state
        .getIn(['annotations', aix, 'points', pix]);

      let xDiff = state.getIn(['coords', 'x']) - e.pageX;
      let yDiff = state.getIn(['coords', 'y']) - e.pageY;
      return state
        .setIn(['coords', 'x'], e.pageX)
        .setIn(['coords', 'y'], e.pageY)
        .setIn(['annotations', aix, 'points', pix, 0],
               point.get(0) - xDiff)
        .setIn(['annotations', aix, 'points', pix, 1],
               point.get(1) - yDiff);
    },
  },
  AnnotatorState
);
export default annotatorReducers;
