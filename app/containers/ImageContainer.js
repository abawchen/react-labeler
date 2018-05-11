import { connect } from 'react-redux';
import Annotator from '../components/Annotator';

import {
  addPoint,
  selectPoint,
  deselectPoint,
  movePoint,
} from '../actions';

const mapStateToProps = (state) => {
  const annotatorState = state.get('annotator');
  return {
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
    onPointMouseDown: (event) => {
      dispatch(selectPoint({ event }));
    },
    onPointMouseUp: (event) => {
      dispatch(deselectPoint({ event }));
    },
    onPointMouseMove: (event) => {
      dispatch(movePoint({ event }));
    }
  }
}

const Annotations = connect(
  mapStateToProps,
  mapDispatchToProps
)(Annotator);

export default Annotations;
