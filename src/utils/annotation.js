import {toastr} from 'react-redux-toastr';

export const getDisplayValue = (val, a, b) => {
  if (a * b == 0) {
    return val;
  }
  return val * a / b;
}

export const getDisplayX = (image, x) => {
  return getDisplayValue(x, image.width, image.initWidth);
}

export const getDisplayY = (image, y) => {
  return getDisplayValue(y, image.height, image.initHeight);
}

export const getDisplayPoints = (image, points) => {
  return points.map(point => [
    getDisplayX(image, point[0]), getDisplayY(image, point[1])]);
}

export const getLabelPosition = (image, points, axis) => {
  return getDisplayPoints(image, points)
    .map(point => point[axis])
    .reduce((acc, cur) =>
      axis === 0
      ? Math.max(acc, cur) + 5
      : Math.min(acc, cur), axis === 0 ? 0 : Infinity);
}

export const getPathD = (image, points, isClosed) => {
  let d = `M0,0 L${image.width},0 L${image.width},${image.height} L0,${image.height} z`;
  d += points
    .reduce((acc, point, index) => {
      return `${acc} ${index === 0 ? 'M' : 'L'}${getDisplayX(image, point[0])},${getDisplayY(image, point[1])}`
    }, '');
  if (isClosed) {
    d += ' z';
  }
  return d;
}

export const keyDownHandler = (event, deleteAnnotation, aix) => {
   if (event.key == 'Enter') {
     event.target.blur();
   }
   if (event.ctrlKey && event.keyCode === 68) {
     const toastrOptions = {
        onOk: () => deleteAnnotation(aix),
     }
     toastr.confirm('Are you sure to delete this annotation?', toastrOptions);
     event.preventDefault();
   }
}

export const focusOnInput = (id) => {
  document.querySelector(id).focus();
}
