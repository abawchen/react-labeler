import { connect } from 'react-redux';
import Annotation from '../components/Annotation';

import {
  addPoint
} from '../actions';

const mapStateToProps = (state) => {
  const annotationState = state.get('annotation');
  console.log(annotationState);
  return {
    src: annotationState.get('src'),
    annotation: annotationState.get('annotation'),
    annotations: annotationState.get('annotations'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPoint: (event) => {
      dispatch(addPoint(event));
    }
  }
}

const Annotations = connect(
  mapStateToProps,
  mapDispatchToProps
)(Annotation);

export default Annotations;
