import {toastr} from 'react-redux-toastr';

export const getLabelPosition = (points, axis) => {
  return points
    .map(point => point[axis])
    .reduce((acc, cur) =>
      axis === 0
      ? Math.max(acc, cur) + 5
      : Math.min(acc, cur), axis === 0 ? 0 : Infinity);
}

export const getPathD = (
  imageWidth, imageHeight, points, isClosed) => {
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
