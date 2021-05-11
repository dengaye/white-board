import { atom } from 'recoil';
import { MODE_TYPES, BRUSH_COLORS, BRUSH_SIZES } from '@src/contants';

export const canvasState = atom<any>({
  key: 'canvas',
  default: null,
});

export const canvasContextState = atom<any>({
  key: 'canvasContext',
  default: null,
});

export const templateCanvasState = atom<any>({
  key: 'templateCanvasState',
  default: null,
});

export const templateContextState = atom<any>({
  key: 'templateContextState',
  default: null,
});

export const modeTypeState = atom({
  key: 'modeTypeState',
  default: MODE_TYPES.PENCIL,
});

export const brushColorState = atom({
  key: 'brushColorState',
  default: BRUSH_COLORS[0],
});

export const lineWidthState = atom({
  key: 'lineWidthState',
  default: BRUSH_SIZES[0],
});

export const canvasHistoryState = atom<any>({
  key: 'canvasHistoryState',
  default: [],
});

export const canvasHistoryOfReconveryState = atom<any>({
  key: 'canvasHistoryOfReconveryState',
  default: [],
});

export const showPreviewWindowState = atom({
  key: 'showPreviewWindow',
  default: false,
});

export const iframeMapState = atom<any>({
  key: 'iframeMapState',
  default: {},
});
