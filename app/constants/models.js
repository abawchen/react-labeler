import Immutable from 'immutable';

export const AnnotationState = Immutable.fromJS({
  'src': '',
  'annotations': [],
  'annotation': {
    id: '',
    label: '',
    shape: '',
    points: [],
    completed: false
  },
  'point': {
    x: 0,
    y: 0
  },
  'line': {
    start: [],
    end: []
  }
});
