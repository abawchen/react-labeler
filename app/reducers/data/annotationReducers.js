import { handleActions } from 'redux-actions';
import { AnnotatorState } from '../../constants/models';
import Immutable from 'immutable';
import {
  CRAETE
} from '../../constants/actionTypes';

const annotatorReducers = handleActions(
  {
    SELECT_POINT: (state, { payload }) => {
      /*
      console.log(state);
      console.log(payload.event.clientX, payload.event.clientY);
      */
      /*
      console.log('SELECT_POINT');
      */
      let index = payload.event.currentTarget.dataset.index;
      /*
      let nextState = state
        .merge('annotation', state.get('annotations').get(index));
      nextState
        .set('annotations', state.get('annotations').remove(index));
      console.loget(nextState);
      return nextState;
      */
      
      let annotations = state.get('annotations');
      let annotation = annotations.get(index);
      annotations = annotations.remove(index);
      let nextState = state
        .set('annotation', annotation)
        .set('annotations', annotations);
      console.log('abaw');
      console.log(nextState);
      //return nextState;
      
      return state
        .set('src', 'https://lh3.googleusercontent.com/94fN62L4FNTaJIdWwI4ZRxVCQY1SLqtVzgB68rH_TS2n=w640-h360-p')
        .set('annotations', annotations)
        .set('annotation', Immutable.fromJS({
          'points': []
        }));
    },
    DESELECT_POINT: (state, { payload }) => {
      /*
      console.log('DESELECT_POINT');
      return state;
      */
      /*
      let annotations = state
        .getIn(['annotator', 'annotations'])
        .push(state.getIn['annoator', 'annotation']);
      return state
        .setIn(['annotator', 'annotations'], annotations)
        .setIn(['annotator', 'annotation'], {});
      */
      return state;
    },
    MOVE_POINT: (state, { payload }) => {
      return state;
    },
  },
  AnnotatorState
);
export default annotatorReducers;
