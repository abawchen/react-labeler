export const getLabelPosition = (points, axis) => {
  return points
    .map(point => point[axis])
    .reduce((acc, cur) =>
      axis === 0
      ? Math.max(acc, cur) + 5
      : Math.min(acc, cur), 0);
}

export const getPathD = (imageWidth, imageHeight, points) => {
  let d = `M0,0 L${imageWidth},0 L${imageWidth},${imageHeight} L0,${imageHeight} z`;
  d += points
    .reduce((acc, point, index) => {
      return `${acc} ${index === 0 ? 'M' : 'L'}${point[0]},${point[1]}`
    }, '');
  d += ' z';
  return d;
}

export const keyPressHandler = (event) => {
   if (event.key == 'Enter') {
     event.target.blur();
   }
}

