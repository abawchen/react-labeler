import Immutable from 'immutable';

export const AnnotatorState = Immutable.fromJS({
  'annotations': [],
  'annotation': {
    id: '',
    label: '',
    shape: '',
    points: [],
    completed: false
  }
})
