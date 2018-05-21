import { createAction } from 'redux-actions';
import {
  ON_IMAGE_LOAD,
  CHANGE_LABEL_TEXT,
  MOVE,
  ADD_POINT,
  SELECT_POINT,
  DESELECT_POINT,
  ENTER_POINT,
  LEAVE_POINT,
  SELECT_SHAPE,
  DESELECT_SHAPE,
  ENTER_SHAPE,
  LEAVE_SHAPE,
} from '../constants/actionTypes';

export const onImageLoad = createAction(ON_IMAGE_LOAD);
export const changeLabelText = createAction(CHANGE_LABEL_TEXT);
export const move = createAction(MOVE);
export const addPoint = createAction(ADD_POINT);
export const selectPoint = createAction(SELECT_POINT);
export const deselectPoint = createAction(DESELECT_POINT);
export const enterPoint = createAction(ENTER_POINT);
export const leavePoint = createAction(LEAVE_POINT);
export const selectPolygon = createAction(SELECT_SHAPE);
export const deselectPolygon = createAction(DESELECT_SHAPE);
export const enterPolygon = createAction(ENTER_SHAPE);
export const leavePolygon = createAction(LEAVE_SHAPE);
