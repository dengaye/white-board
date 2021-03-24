import { ACTIONS } from '@src/contants';

export const setCanvasByAction = (payload: any) => ({
  type: ACTIONS.SET_CANVAS,
  payload,
});

export const setCanvasContextByAction = (payload: any) => ({
  type: ACTIONS.SET_CANVAS_CONTEXT,
  payload,
});

export const setBrushColorByAction = (payload: any) => ({
  type: ACTIONS.SET_BRUSH_COLOR,
  payload,
});

export const setLineWidthByAction = (payload: any) => ({
  type: ACTIONS.SET_LINE_WIDTH,
  payload,
});

export const setModeTypeByAction = (payload: any) => ({
  type: ACTIONS.SET_MODE_TYPE,
  payload,
});

export const setCanvasHistoryByAction = (payload: any) => ({
  type: ACTIONS.SET_CANVAS_HISTORY,
  payload,
});

export const setCanvasHistoryOfReconveryByAction = (payload: any) => ({
  type: ACTIONS.SET_CANVAS_HISTORY_OF_RECONVERY,
  payload,
});

export const setTemplateCanvasByAction = (payload: any) => ({
  type: ACTIONS.SET_TEMPLATE_CANVAS,
  payload,
});

export const setTemplateContextByAction = (payload: any) => ({
  type: ACTIONS.SET__TEMPLATE_CANVAS_CONTEXT,
  payload,
});
