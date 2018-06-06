import { connect } from 'react-redux';
import Labeler from '../components/Labeler';
import {
  onImageLoad,
  shortcut,
  changeLabelText,
  move,
  deleteAnnotation,
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
  return state.get('labeler').toJS();
}

const mapDispatchToProps = (dispatch) => {
  //TODO: Not pass whole event object.
  return {
    onImageLoad: (event) => {
      dispatch(onImageLoad({ event }));
    },
    onAddPoint: (event) => {
      dispatch(addPoint({ event }));
    },
    onKeyDown: (event) => {
      dispatch(shortcut({ event }));
    },
    onLabelChange: (event) => {
       dispatch(changeLabelText({ event }));
    },
    onMouseMove: (event) => {
      dispatch(move({ event }));
    },
    onDeleteAnnotation: (aix) => {
      dispatch(deleteAnnotation(aix));
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
)(Labeler);

export default Annotations;
