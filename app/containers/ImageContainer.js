import { connect } from 'react-redux';
import Annotator from '../components/Annotator';

import {
  move,
  addPoint,
  selectPoint,
  deselectPoint,
  selectPolygon,
  deselectPolygon,
  enterPolygon,
  leavePolygon,
} from '../actions';

const mapStateToProps = (state) => {
  const annotatorState = state.get('annotator');
  return {
    hix: annotatorState.get('hix'),
    aix: annotatorState.get('aix'),
    src: annotatorState.get('src'),
    annotation: annotatorState.get('annotation'),
    annotations: annotatorState.get('annotations'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPoint: (event) => {
      dispatch(addPoint(event));
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
