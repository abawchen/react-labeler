import { connect } from 'react-redux';
import Annotator from '../components/Annotator';

import {
  onImageLoad,
  setAnnotationShape,
  changeLabelText,
  move,
  addPoint,
  selectPoint,
  deselectPoint,
  enterPoint,
  leavePoint,
  selectPolygon,
  deselectPolygon,
  enterPolygon,
  leavePolygon,
  beginToDragPreAnnotation,
  endOfDragPreAnnotation,
  dragPreAnnotation,
  enterPrePoint,
  leavePrePoint,
  clickPrePoint,
} from '../actions';

const mapStateToProps = (state) => {
  return state.get('annotator').toJS();
}

const mapDispatchToProps = (dispatch) => {
  return {
    onImageLoad: (event) => {
      dispatch(onImageLoad({ event }));
    },
    onAddPoint: (event) => {
      dispatch(addPoint({ event }));
    },
    onKeyDown: (event) => {
      dispatch(setAnnotationShape({ event }));
    },
    onLabelChange: (event) => {
       dispatch(changeLabelText({ event }));
    },
    onMouseMove: (event) => {
      dispatch(move({ event }));
    },
    onPointMouseDown: (event) => {
      dispatch(selectPoint({ event }));
    },
    onPointMouseUp: (event) => {
      dispatch(deselectPoint({ event }));
    },
    onPointMouseEnter: (event) => {
      dispatch(enterPoint({ event }));
    },
    onPointMouseLeave: (event) => {
      dispatch(leavePoint({ event }));
    },
    onPolygonMouseDown: (event) => {
      dispatch(selectPolygon({ event }));
    },
    onPolygonMouseUp: (event) => {
      dispatch(deselectPolygon({ event }));
    },
    onPolygonMouseEnter: (event) => {
      dispatch(enterPolygon({ event }));
    },
    onPolygonMouseLeave: (event) => {
      dispatch(leavePolygon({ event }));
    },
    onPreAnnotationMouseDown: (event) => {
      dispatch(beginToDragPreAnnotation({ event }));
    },
    onPreAnnotationMouseUp: (event) => {
      dispatch(endOfDragPreAnnotation({ event }));
    },
    onPreAnnotationMouseMove: (event) => {
      dispatch(dragPreAnnotation({ event }));
    },
    onPrePointMouseEnter: (event) => {
      dispatch(enterPrePoint({ event }));
    },
    onPrePointMouseLeave: (event) => {
      dispatch(leavePrePoint({ event }));
    },
    onPrePointClick: (event) => {
      dispatch(clickPrePoint({ event }));
    },
  }
}

const Annotations = connect(
  mapStateToProps,
  mapDispatchToProps
)(Annotator);

export default Annotations;
