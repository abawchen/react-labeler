import { createAction } from 'redux-actions';
import {
  CHANGE_LABEL_TEXT,
  MOVE,
  ADD_POINT,
  SELECT_POINT,
  DESELECT_POINT,
  SELECT_SHAPE,
  DESELECT_SHAPE,
  ENTER_SHAPE,
  LEAVE_SHAPE,
} from '../constants/actionTypes';


export const changeLabelText = createAction(CHANGE_LABEL_TEXT);
export const move = createAction(MOVE);
export const addPoint = createAction(ADD_POINT);
export const selectPoint = createAction(SELECT_POINT);
export const deselectPoint = createAction(DESELECT_POINT);
export const selectPolygon = createAction(SELECT_SHAPE);
export const deselectPolygon = createAction(DESELECT_SHAPE);
export const enterPolygon = createAction(ENTER_SHAPE);
export const leavePolygon = createAction(LEAVE_SHAPE);
