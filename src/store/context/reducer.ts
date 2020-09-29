import produce from 'immer';

import { InterStore } from './types';
import ACTIONS from './action';
import { BRUSH_COLORS, BRUSH_SIZES } from '@src/contants';

export const initialState: InterStore = {
  canvas: null,
  context: null,
  brushColor: BRUSH_COLORS[0],
  lineWidth: BRUSH_SIZES[0],
};

export default produce((draft, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.SET_CANVAS:
      draft.canvas = payload;
      break;

    case ACTIONS.SET_CANVAS_CONTEXT:
      draft.context = payload;
      break;

    case ACTIONS.SET_BRUSH_COLOR:
      draft.brushColor = payload;
      break;

    case ACTIONS.SET_LINE_WIDTH:
      draft.lineWidth = payload;
      break;

    default:
      break;
  }
});