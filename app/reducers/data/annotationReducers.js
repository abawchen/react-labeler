import { handleActions } from 'redux-actions';
import { AnnotatorState } from '../../constants/models';
import Immutable from 'immutable';


const annotatorReducers = handleActions(
  {
    CHANGE_LABEL_TEXT: (state, { payload }) => {
      let e = payload.event;
      let aix = e.currentTarget.dataset.aix;
      return state
        .setIn(['annotations', aix, 'label'], e.target.value);
    },
    MOVE: (state, { payload }) => {
      // https://codepen.io/techniq/pen/yVEeOx
      if (!state.hasIn(['coords', 'x'])) {
        return state;
      }

      let e = payload.event;
      let aix = parseInt(state.get('aix'));
      let pix = parseInt(state.get('pix'));
      let xDiff = state.getIn(['coords', 'x']) - e.pageX;
      let yDiff = state.getIn(['coords', 'y']) - e.pageY;
      if (aix !== -1 && pix === -1) {
        // Polygon
        let points = state
          .getIn(['annotations', aix, 'points'])
          .map(point => Immutable.fromJS(
            [point.get(0) - xDiff, point.get(1) - yDiff]
          ));
        return state
          .setIn(['coords', 'x'], e.pageX)
          .setIn(['coords', 'y'], e.pageY)
          .setIn(['annotations', aix, 'points'], points);
      } else {
        // Point
        let annotation = state.getIn(['annotations', aix]);
        let point = annotation.getIn(['points', pix]);
        let shape = annotation.get('shape');
        let newX = point.get(0) - xDiff;
        let newY = point.get(1) - yDiff;
        if (shape === 'polygon') {
          // Point of polygon
          return state
            .setIn(['coords', 'x'], e.pageX)
            .setIn(['coords', 'y'], e.pageY)
            .setIn(['annotations', aix, 'points', pix, 0], newX)
            .setIn(['annotations', aix, 'points', pix, 1], newY);
        } else if (shape === 'rectangle') {
          // Point of rectangle
          let points = state.getIn(['annotations', aix, 'points'])
          let previx = (pix - 1 + 4) % 4;
          let nextix = (pix + 1) % 4;
          let prevPoint = points.get(previx);
          let nextPoint = points.get(nextix);
          let xix = nextix;
          let yix = previx;
          if (prevPoint.get(0) === point.get(0)) {
             xix = previx;
             yix = nextix;
          }
          return state
            .setIn(['coords', 'x'], e.pageX)
            .setIn(['coords', 'y'], e.pageY)
            .setIn(['annotations', aix, 'points', pix, 0], newX)
            .setIn(['annotations', aix, 'points', pix, 1], newY)
            .setIn(['annotations', aix, 'points', xix, 0], newX)
            .setIn(['annotations', aix, 'points', yix, 1], newY);
        }
      }
    },
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
    SELECT_POLYGON: (state, { payload }) => {
      let e = payload.event;
      return state
        .setIn(['coords', 'x'], e.pageX)
        .setIn(['coords', 'y'], e.pageY)
        .set('aix', e.currentTarget.dataset.aix)
        .set('pix', -1);
    },
    DESELECT_POLYGON: (state, { payload }) => {
      return state
        .removeIn(['coords', 'x'])
        .set('aix', -1)
        .set('pix', -1);
    },
    ENTER_POLYGON: (state, { payload }) => {
       return state
        .set('hix', parseInt(payload.event.currentTarget.dataset.aix));
    },
    LEAVE_POLYGON: (state, { payload }) => {
      return state
        .set('hix', -1);
    }
  },
  AnnotatorState
);
export default annotatorReducers;
