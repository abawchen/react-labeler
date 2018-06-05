import Immutable from 'immutable';

export const LabelerState = Immutable.fromJS({
  // TODO: Remove seeding value
  // src: 'https://goo.gl/9nhdu1',
  image: {
     src: 'https://static.dezeen.com/uploads/2017/08/clifton-house-project-architecture_dezeen_hero-1.jpg',
    originalWidth: 0,
    originalHeight: 0,
    width: 0,
    height: 0,
  },
  coords: {},
  mode: 'DEFAULT',
  hix: -1,
  aix: -1,
  pix: -1,
  keyMap: {
    'p': 'polygon',
    'r': 'rectangle',
    'Escape': '',
  },
  annotationShape: '',
  preAnnotation: {
    id: '',
    label: '',
    shape: '',
    points: []
  },
  annotations: [
    {
      id: '1',
      label: 'first',
      shape: 'polygon',
      points: [
        [10, 10],
        [20, 250],
        [30, 130]
      ]
    },
    {
      id: '2',
      label: 'second',
      shape: 'polygon',
      points: [
        [100, 100],
        [130, 110],
        [120, 140]
      ]
    },
    {
       id: '3',
       label: 'third',
       shape: 'rectangle',
       points: [
        [50, 50],
        [50, 80],
        [80, 80],
        [80, 50],
       ]
    }
  ],
});
