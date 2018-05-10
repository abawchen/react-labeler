import Immutable from 'immutable';

export const AnnotatorState = Immutable.fromJS({
  // TODO: Remove seeding value
  'src': 'https://goo.gl/9nhdu1',
  'annotations': [
    {
      'label': 'first',
      'shape': 'polygon',
      'points': [
        [10, 10],
        [20, 20],
        [30, 30]
      ]
    },
    {
      'label': 'second',
      'shape': 'polygon',
      'points': [
        [100, 100],
        [130, 110],
        [120, 140]
      ]
    }
  ],
  'annotation': {
    id: '',
    label: 'labelme&you',
    shape: '',
    points: [[10, 10], [20, 20], [30, 30]],
    completed: true
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
