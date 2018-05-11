import { createAction } from 'redux-actions';
import {
  ADD_POINT,
  SELECT_POINT,
  DESELECT_POINT,
  MOVE_POINT,
} from '../constants/actionTypes';

export const addPoint = createAction(ADD_POINT);
export const selectPoint = createAction(SELECT_POINT);
export const deselectPoint = createAction(DESELECT_POINT);
export const movePoint = createAction(MOVE_POINT);
