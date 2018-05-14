import Immutable from 'immutable';

export const AnnotatorState = Immutable.fromJS({
  // TODO: Remove seeding value
  src: 'https://goo.gl/9nhdu1',
  //coords: [],
  annotations: [
    /*{
      id: '1',
      label: 'first',
      shape: 'polygon',
      points: [
        [10, 10],
        [20, 20],
        [30, 30]
      ]
    },
    */
    {
      id: '2',
      label: 'second',
      shape: 'polygon',
      points: [
        [100, 100],
        //[130, 110],
        //[120, 140]
      ]
    }
  ],
  aix: -1,
  pix: -1,
  annotation: {
    id: '',
    label: '',
    shape: '',
    points: [],
    completed: false
  },
  point: {
    x: 0,
    y: 0
  },
  line: {
    start: [],
    end: []
  }
});
