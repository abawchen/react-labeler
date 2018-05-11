import { handleActions } from 'redux-actions';
import { AnnotatorState } from '../../constants/models';
import {
  CRAETE
} from '../../constants/actionTypes';

const annotatorReducers = handleActions(
  {
    CREATE: (state) => {
      let annotations = state.get('annotations').push(state.get('annotation'));
      return state.set('annotations', annotations);
    }
  },
  AnnotatorState
);
export default annotatorReducers;
