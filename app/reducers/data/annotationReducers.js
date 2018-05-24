import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import { AnnotatorState } from '../../constants/models';
import {
   DEFAULT,
   PRE_ANNOTATION,
   ADD_POINT,
   MOVE_POINT,
   MOVE_SHAPE,
} from '../../constants/modes';

const defaultPreAnnotation = Immutable.fromJS({
  id: '',
  shape: '',
  points: []
});

const pushToAnnotations = (state) => {
    return state
      .set('mode', 'DEFAULT')
      .set('annotationShape', '')
      .set('pix', -1)
      .update('annotations', list => list.push(state.get('preAnnotation')))
      .set('preAnnotation', defaultPreAnnotation)
      .set('hix', state.get('annotations').size);
}

const annotatorReducers = handleActions({
    ON_IMAGE_LOAD: (state, { payload }) => {
      let e = payload.event;
      return state
        .set('imageWidth', e.target.width)
        .set('imageHeight', e.target.height);
    },
    SET_ANNOTATION_SHAPE: (state, { payload }) => {
      let e = payload.event;
      let shape = state.getIn(['keyMap', e.key], '');
      return shape === ''
        ? state
        : state
          .set('mode', PRE_ANNOTATION)
          .set('annotationShape', shape);
    },
    CHANGE_LABEL_TEXT: (state, { payload }) => {
      let e = payload.event;
      let aix = e.currentTarget.dataset.aix;
      return state
        .setIn(['annotations', aix, 'label'], e.target.value);
    },
    ADD_POINT: (state, { payload }) => {
      let e = payload.event;
      if (state.get('annotationShape') === 'polygon') {
        let preAnnotation = state
          .get('preAnnotation', defaultPreAnnotation)
          .set('shape', 'polygon')
          .update('points', list => list.push(
            Immutable.fromJS([e.pageX, e.pageY])));
        return state
          .set('preAnnotation', preAnnotation);
      }
      return state;
    },
    MOVE: (state, { payload }) => {
      let mode = state.get('mode');
      if (!mode.startsWith('MOVE')) {
        return state;
      }
      // TODO: Refactor
      // https://codepen.io/techniq/pen/yVEeOx
      let e = payload.event;
      let aix = parseInt(state.get('aix'));
      let pix = parseInt(state.get('pix'));
      let xDiff = state.getIn(['coords', 'x']) - e.pageX;
      let yDiff = state.getIn(['coords', 'y']) - e.pageY;
      if (mode === MOVE_SHAPE) {
        let points = state
          .getIn(['annotations', aix, 'points'])
          .map(point => Immutable.fromJS(
            [point.get(0) - xDiff, point.get(1) - yDiff]
          ));
        return state
          .setIn(['coords', 'x'], e.pageX)
          .setIn(['coords', 'y'], e.pageY)
          .setIn(['annotations', aix, 'points'], points);
      } else if (mode === MOVE_POINT) {
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
        .set('mode', MOVE_POINT)
        .setIn(['coords', 'x'], e.pageX)
        .setIn(['coords', 'y'], e.pageY)
        .set('aix', parseInt(e.currentTarget.dataset.aix))
        .set('pix', parseInt(e.currentTarget.dataset.pix));
    },
    DESELECT_POINT: (state, { payload }) => {
      return state
        .set('mode', DEFAULT)
        .set('aix', -1)
        .set('pix', -1);
    },
    ENTER_POINT: (state, { payload }) => {
      return state
        .set('hix', parseInt(payload.event.currentTarget.dataset.aix))
    },
    LEAVE_POINT: (state, { payload }) => {
      return state.get('mode') === DEFAULT
        ? state.set('hix', -1)
        : state;
    },
    SELECT_SHAPE: (state, { payload }) => {
      let e = payload.event;
      return state
        .set('mode', MOVE_SHAPE)
        .setIn(['coords', 'x'], e.pageX)
        .setIn(['coords', 'y'], e.pageY)
        .set('aix', parseInt(e.currentTarget.dataset.aix))
        .set('pix', -1);
    },
    DESELECT_SHAPE: (state, { payload }) => {
      return state
        .set('mode', DEFAULT)
        .set('aix', -1)
        .set('pix', -1);
    },
    ENTER_SHAPE: (state, { payload }) => {
       return state
        .set('hix', parseInt(payload.event.currentTarget.dataset.aix));
    },
    LEAVE_SHAPE: (state, { payload }) => {
      return state.get('mode') === DEFAULT
        ? state.set('hix', -1)
        : state;
    },
    BEGIN_TO_DRAG_PRE_ANNOTATION: (state, { payload }) => {
      let e = payload.event;
      let preAnnotation = defaultPreAnnotation
        .set('shape', 'rectangle')
        .set('points', Immutable.fromJS([
          [e.pageX, e.pageY],
          [e.pageX, e.pageY],
          [e.pageX, e.pageY],
          [e.pageX, e.pageY],
        ]));
      return state
        .setIn(['coords', 'x'], e.pageX)
        .setIn(['coords', 'y'], e.pageY)
        .set('preAnnotation', preAnnotation)
        .set('pix', 2);
    },
    END_OF_DRAG_PRE_ANNOTATION: (state, { payload }) => {
      return pushToAnnotations(state);
    },
    DRAG_PRE_ANNOTATION: (state, { payload }) => {
      let points = state.getIn(['preAnnotation', 'points'])
      if (points.size === 0) {
        return state;
      }
      // TODO: Consolidate duplicate code.
      let e = payload.event;
      let xDiff = state.getIn(['coords', 'x']) - e.pageX;
      let yDiff = state.getIn(['coords', 'y']) - e.pageY;
      let pix = parseInt(state.get('pix'));
      let point = points.get(pix);
      let newX = point.get(0) - xDiff;
      let newY = point.get(1) - yDiff;
      let previx = (pix - 1 + 4) % 4;
      let nextix = (pix + 1) % 4;
      let prevPoint = points.get(previx);
      let xix = nextix;
      let yix = previx;
      if (prevPoint.get(0) === point.get(0)) {
         xix = previx;
         yix = nextix;
      }
      return state
        .setIn(['coords', 'x'], e.pageX)
        .setIn(['coords', 'y'], e.pageY)
        .setIn(['preAnnotation', 'points', pix, 0], newX)
        .setIn(['preAnnotation', 'points', pix, 1], newY)
        .setIn(['preAnnotation', 'points', xix, 0], newX)
        .setIn(['preAnnotation', 'points', yix, 1], newY);
    },
    ENTER_PRE_POINT: (state, { payload }) => {
      return state
        .set('pix', parseInt(payload.event.currentTarget.dataset.pix));
    },
    LEAVE_PRE_POINT: (state, { payload }) => {
      return state
        .set('pix', -1);
    },
    CLICK_PRE_POINT: (state, { payload }) => {
      return pushToAnnotations(state);
    },
  },
  AnnotatorState
);
export default annotatorReducers;
