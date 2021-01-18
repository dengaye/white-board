import React, { useEffect, useState, useContext } from 'react';

import Controls from '@util/controls';

import {
  WhiteBoadeContext,
  setCanvasByAction,
  setCanvasContextByAction,
  setCanvasHistoryByAction,
} from '@src/store';

const NewControl = new Controls({});

const CanvasContainer = () => {
  const { dispatch, state } = useContext(WhiteBoadeContext);
  const { canvas, canvasContext, canvasHistory } = state;
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    const canvasDOM = window.document.getElementById('canvas') as any;
    const context = canvasDOM.getContext('2d');

    if (canvasDOM) {
      canvasDOM.width = window.innerWidth;
      canvasDOM.height = window.innerHeight;
      dispatch(setCanvasByAction(canvasDOM));
      dispatch(setCanvasContextByAction(context));
    }
  }, []);

  const saveImageUrlToStore = (dataUrl: string) => {
    canvasHistory.push(dataUrl);
    dispatch(setCanvasHistoryByAction(canvasHistory));
  };

  useEffect(() => {
    if (canvas && !isMount) {
      setMount(true);
      NewControl.init({
        ...state,
        context: canvasContext,
        saveImageUrlToStore,
      });
    }
  }, [canvas]);

  useEffect(() => {
    if (state.canvas && isMount) {
      NewControl.update(state);
    }
  }, [state.brushColor, state.lineWidth, state.modeType]);

  return <canvas id='canvas'></canvas>;
};

export default CanvasContainer;
