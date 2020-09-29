import { ACTIONS } from './contants';

export const setCanvasByAction = (payload: any) => ({
  type: ACTIONS.SET_CANVAS,
  payload,
});

export const setContextByAction = (payload: any) => ({
  type: ACTIONS.SET_CANVAS_CONTEXT,
  payload,
});

export const setBrushColor = (payload: string) => ({
  type: ACTIONS.SET_BRUSH_COLOR,
  payload,
});

export default {
  ...ACTIONS,
};
