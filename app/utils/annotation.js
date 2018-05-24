export const getLabelPosition = (points, axis) => {
  return points
    .map(point => point[axis])
    .reduce((acc, cur) =>
      axis === 0
      ? Math.max(acc, cur) + 5
      : Math.min(acc, cur), axis === 0 ? 0 : Infinity);
}

export const getPathD = (imageWidth, imageHeight, isClosed, points) => {
  let d = `M0,0 L${imageWidth},0 L${imageWidth},${imageHeight} L0,${imageHeight} z`;
  d += points
    .reduce((acc, point, index) => {
      return `${acc} ${index === 0 ? 'M' : 'L'}${point[0]},${point[1]}`
    }, '');
  if (isClosed) {
    d += ' z';
  }
  return d;
}

export const keyPressHandler = (event) => {
   console.log('keyPressHandler');
   if (event.key == 'Enter') {
     event.target.blur();
   }
}

export const focusOnInput = (id) => {
  document.querySelector(id).focus();
}
