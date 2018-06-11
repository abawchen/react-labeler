import { connect } from 'react-redux';
import Labeler from '../components/Labeler';
import {
  onImageLoad,
  shortcut,
  changeLabelText,
  move,
  deleteAnnotation,
  addPoint,
  clickPoint,
  enterPoint,
  leavePoint,
  clickShape,
  enterShape,
  leaveShape,
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
    onPointClick: (event) => {
      dispatch(clickPoint({ event }));
    },
    onPointMouseEnter: (event) => {
      dispatch(enterPoint({ event }));
    },
    onPointMouseLeave: (event) => {
      dispatch(leavePoint({ event }));
    },
    onShapeClick: (event) => {
      dispatch(clickShape({ event }));
    },
    onShapeMouseEnter: (event) => {
      dispatch(enterShape({ event }));
    },
    onShapeMouseLeave: (event) => {
      dispatch(leaveShape({ event }));
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
