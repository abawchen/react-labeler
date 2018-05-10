import { handleActions } from 'redux-actions';
import { AnnotationState } from '../../constants/models';
import {
  CRAETE
} from '../../constants/actionTypes';

const annotationReducers = handleActions(
  {
    CREATE: (state) => {
      let annotations = state.get('annotations').push(state.get('annotation'));
      return state.set('annotations', annotations);
    }
  },
  AnnotationState
);
export default annotationReducers;
