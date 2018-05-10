import Immutable from 'immutable';

export const AnnotatorState = Immutable.fromJS({
  // TODO: Remove seeding value
  'src': 'https://goo.gl/9nhdu1',
  'annotations': [],
  'annotation': {
    id: '',
    label: 'labelme&you',
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
