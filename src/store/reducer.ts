import { ACTIONS, BRUSH_COLORS, BRUSH_SIZES, MODE_TYPES } from '@src/contants';

export interface IState {
  canvas: any;
  canvasContext: any;
  brushColor: string;
  lineWidth: number;
  modeType: string;
  canvasHistory: any;
  canvasHistoryOfReconvery: any;
  templateCanvas: any;
  templateContext: any;
}

export const initialState = {
  canvas: null,
  canvasContext: null,
  brushColor: BRUSH_COLORS[0],
  lineWidth: BRUSH_SIZES[0],
  modeType: MODE_TYPES.LINE,
  canvasHistory: [],
  canvasHistoryOfReconvery: [],
  templateCanvas: null,
  templateContext: null,
};

export interface IAction {
  payload?: any;
  type: string;
}

export function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case ACTIONS.SET_CANVAS:
      return {
        ...state,
        canvas: action.payload,
      };
    case ACTIONS.SET_CANVAS_CONTEXT:
      return {
        ...state,
        canvasContext: action.payload,
      };
    case ACTIONS.SET_BRUSH_COLOR:
      return {
        ...state,
        brushColor: action.payload,
      };
    case ACTIONS.SET_LINE_WIDTH:
      return {
        ...state,
        lineWidth: action.payload,
      };
    case ACTIONS.SET_MODE_TYPE:
      return {
        ...state,
        modeType: action.payload,
      };
    case ACTIONS.SET_CANVAS_HISTORY:
      return {
        ...state,
        canvasHistory: action.payload,
      };
    case ACTIONS.SET_CANVAS_HISTORY_OF_RECONVERY:
      return {
        ...state,
        canvasHistoryOfReconvery: action.payload,
      };
    case ACTIONS.SET_TEMPLATE_CANVAS:
      return {
        ...state,
        templateCanvas: action.payload,
      };
    case ACTIONS.SET__TEMPLATE_CANVAS_CONTEXT:
      return {
        ...state,
        templateContext: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
