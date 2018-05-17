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
} from '../actions';

const mapStateToProps = (state) => {
  const annotatorState = state.get('annotator');
  return {
    imageWidth: annotatorState.get('imageWidth'),
    imageHeight: annotatorState.get('imageHeight'),
    hix: annotatorState.get('hix'),
    aix: annotatorState.get('aix'),
    src: annotatorState.get('src'),
    annotationShape: annotatorState.get('annotationShape'),
    annotation: annotatorState.get('annotation'),
    annotations: annotatorState.get('annotations'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onImageLoad: (event) => {
      dispatch(onImageLoad({ event }));
    },
    onAddPoint: (event) => {
      dispatch(addPoint(event));
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
  }
}

const Annotations = connect(
  mapStateToProps,
  mapDispatchToProps
)(Annotator);

export default Annotations;
