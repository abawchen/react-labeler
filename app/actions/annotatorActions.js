import { createAction } from 'redux-actions';
import {
  ADD_POINT,
  SELECT_POINT,
} from '../constants/actionTypes';

export const addPoint = createAction(ADD_POINT);
export const selectPoint = createAction(SELECT_POINT);

