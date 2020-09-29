import produce from 'immer';

import { InterStore } from './types';
import ACTIONS from './action';

export const initialState: InterStore = {
  canvas: null,
  context: null,
  brushColor: 'black',
  lineWidth: 2,
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

    default:
      break;
  }
});
