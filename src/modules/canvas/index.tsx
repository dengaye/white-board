import React, { useEffect, useState } from 'react';

import Controls from '@util/controls';
import { IStore } from '@src/type';
import {
  setCanvasByAction,
  setCanvasContextByAction,
  setCanvasHistoryByAction,
} from '@src/store/actions';

const NewControl = new Controls({});

interface ICanvasProps {
  dispatch: any;
}

const CanvasContainer = (props: ICanvasProps & IStore) => {
  const { canvas, canvasContext, canvasHistory, dispatch } = props;
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
        ...props,
        context: canvasContext,
        saveImageUrlToStore,
      });
    }
  }, [canvas]);

  useEffect(() => {
    if (props.canvas && isMount) {
      NewControl.update(props);
    }
  }, [props.brushColor, props.lineWidth, props.modeType]);

  return <canvas id='canvas'></canvas>;
};

export default CanvasContainer;
