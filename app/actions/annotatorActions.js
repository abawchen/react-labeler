import { createAction } from 'redux-actions';
import {
  ADD_POINT,
  MOVE_POINT,
  SELECT_POINT,
  DESELECT_POINT,
  SELECT_POLYGON,
  DESELECT_POLYGON,
} from '../constants/actionTypes';

export const addPoint = createAction(ADD_POINT);
export const movePoint = createAction(MOVE_POINT);
export const selectPoint = createAction(SELECT_POINT);
export const deselectPoint = createAction(DESELECT_POINT);
export const selectPolygon = createAction(SELECT_POLYGON);
export const deselectPolygon = createAction(DESELECT_POLYGON);
