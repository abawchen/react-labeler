import Immutable from 'immutable';

export const LabelerState = Immutable.fromJS({
  // TODO: Remove seeding value
  image: {
     src: 'https://static.dezeen.com/uploads/2017/08/clifton-house-project-architecture_dezeen_hero-1.jpg',
    originalWidth: 0,
    originalHeight: 0,
    width: 0,
    height: 0,
    widthRatio: 0.0,
    heightRatio: 0.0,
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
       label: 'sofa',
       shape: 'rectangle',
       points: [
        [296, 214],
        [296, 261],
        [383, 261],
        [383, 214],
       ]
    }
  ],
});
