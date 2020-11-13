import React, { useState } from 'react';

import CanvasContainer from './modules/canvas';
import Brush from './modules/brush';
import LeftFeature from './modules/left-feature/index';
import { BRUSH_COLORS, BRUSH_SIZES, MODE_TYPES } from '@src/contants';
import RightFeature from './modules/right-feature';

export default function Container() {
  const [canvas, setCanvas] = useState(null);
  const [canvasContext, setCanvasContext] = useState(null);
  const [brushColor, setBrushColor] = useState(BRUSH_COLORS[0]);
  const [lineWidth, setLineWidth] = useState(BRUSH_SIZES[0]);
  const [modeType, setModeType] = useState(MODE_TYPES.LINE);
  const [canvasHistory, setCanvasHistory] = useState([] as any);
  const [canvasHistoryOfReconvery, setCanvasHistoryOfReconvery] = useState([] as any);

  const store = {
    canvas,
    canvasContext,
    brushColor,
    lineWidth,
    modeType,
    canvasHistory,
    canvasHistoryOfReconvery,
  };

  return (
    <div>
      <CanvasContainer
        {...{
          ...store,
        }}
        setCanvas={setCanvas}
        setCanvasContext={setCanvasContext}
        setCanvasHistory={(data: any) => {
          setCanvasHistory([...data]);
        }}
      />
      <Brush
        {...{
          ...store,
        }}
        setBrushColor={setBrushColor}
        setLineWidth={setLineWidth}
        setModeType={setModeType}
      />
      <LeftFeature
        {...{
          ...store,
        }}
        setModeType={setModeType}
        setCanvasHistory={(data: any) => {
          setCanvasHistory([...data]);
        }}
        setCanvasHistoryOfReconvery={(data: any) => {
          setCanvasHistoryOfReconvery([...data]);
        }}
      />
      <RightFeature
        {...{
          ...store,
        }}
        setModeType={setModeType}
      />
    </div>
  );
}
