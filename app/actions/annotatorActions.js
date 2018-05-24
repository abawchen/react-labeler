import { createAction } from 'redux-actions';
import {
  ON_IMAGE_LOAD,
  SHORTCUT,
  CHANGE_LABEL_TEXT,
  MOVE,
  SELECT_POINT,
  DESELECT_POINT,
  ENTER_POINT,
  LEAVE_POINT,
  SELECT_SHAPE,
  DESELECT_SHAPE,
  ENTER_SHAPE,
  LEAVE_SHAPE,
  ADD_POINT,
  BEGIN_TO_DRAG_PRE_ANNOTATION,
  END_OF_DRAG_PRE_ANNOTATION,
  DRAG_PRE_ANNOTATION,
  ENTER_PRE_POINT,
  LEAVE_PRE_POINT,
  CLICK_PRE_POINT,
} from '../constants/actionTypes';

export const onImageLoad = createAction(ON_IMAGE_LOAD);
export const shortcut = createAction(SHORTCUT);
export const changeLabelText = createAction(CHANGE_LABEL_TEXT);
export const move = createAction(MOVE);

export const selectPoint = createAction(SELECT_POINT);
export const deselectPoint = createAction(DESELECT_POINT);
export const enterPoint = createAction(ENTER_POINT);
export const leavePoint = createAction(LEAVE_POINT);

export const selectPolygon = createAction(SELECT_SHAPE);
export const deselectPolygon = createAction(DESELECT_SHAPE);
export const enterPolygon = createAction(ENTER_SHAPE);
export const leavePolygon = createAction(LEAVE_SHAPE);

export const addPoint = createAction(ADD_POINT);
export const beginToDragPreAnnotation = createAction(BEGIN_TO_DRAG_PRE_ANNOTATION);
export const endOfDragPreAnnotation = createAction(END_OF_DRAG_PRE_ANNOTATION);
export const dragPreAnnotation = createAction(DRAG_PRE_ANNOTATION);
export const enterPrePoint = createAction(ENTER_PRE_POINT);
export const leavePrePoint = createAction(LEAVE_PRE_POINT);
export const clickPrePoint = createAction(CLICK_PRE_POINT);
