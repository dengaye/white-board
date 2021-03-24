import React, { useEffect } from 'react';

import useControl from '@src/hooks/use-controls';

import {
  setCanvasByAction,
  setCanvasContextByAction,
  UseWhiteBoardContext,
  setTemplateCanvasByAction,
  setTemplateContextByAction,
} from '@src/store';

const CanvasContainer = () => {
  const { dispatch } = UseWhiteBoardContext();

  useEffect(() => {
    const canvasDOM = window.document.getElementById('canvas') as any;
    const context = canvasDOM.getContext('2d');
    const container = canvasDOM.parentNode;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvasDOM.width = width;
    canvasDOM.height = height;

    function createTemplateCanvas() {
      const templateCanvasDOM = window.document.createElement('canvas');
      const templateContext = templateCanvasDOM.getContext('2d');

      templateCanvasDOM.id = 'template-canvas';
      templateCanvasDOM.width = width;
      templateCanvasDOM.height = height;
      container.appendChild(templateCanvasDOM);
      dispatch(setTemplateCanvasByAction(templateCanvasDOM));
      dispatch(setTemplateContextByAction(templateContext));
    }

    createTemplateCanvas();
    dispatch(setCanvasByAction(canvasDOM));
    dispatch(setCanvasContextByAction(context));
  }, []);

  useControl();

  return <canvas id='canvas'></canvas>;
};

export default CanvasContainer;
