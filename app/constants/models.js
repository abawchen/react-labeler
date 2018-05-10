import Immutable from 'immutable';

export const AnnotationState = Immutable.fromJS({
  // TODO: Remove seeding value
  'src': 'https://goo.gl/9nhdu1',
  'annotations': [],
  'annotation': {
    id: '',
    label: 'labelme',
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
