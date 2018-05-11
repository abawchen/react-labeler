import { connect } from 'react-redux';
import Annotator from '../components/Annotator';

import {
  addPoint,
  selectPoint,
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
    onCircleMouseDown: (event) => {
      dispatch(selectPoint({ event }));
    },
  }
}

const Annotations = connect(
  mapStateToProps,
  mapDispatchToProps
)(Annotator);

export default Annotations;
