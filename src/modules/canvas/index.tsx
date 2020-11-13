import React, { useEffect, useState } from 'react';

import Controls from '@util/controls';
import { IStore } from '@src/type';

const NewControl = new Controls({});

interface ICanvasProps {
  setCanvasContext: any;
  setCanvas: any;
  setCanvasHistory: any;
}

const CanvasContainer = (props: ICanvasProps & IStore) => {
  const { canvas, canvasContext, canvasHistory } = props;
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    const canvasDOM = window.document.getElementById('canvas') as any;
    const context = canvasDOM.getContext('2d');

    if (canvasDOM) {
      canvasDOM.width = window.innerWidth;
      canvasDOM.height = window.innerHeight;
      props.setCanvas(canvasDOM);
      props.setCanvasContext(context);
    }
  }, []);

  const saveImageUrlToStore = (dataUrl: string) => {
    canvasHistory.push(dataUrl);
    props.setCanvasHistory(canvasHistory);
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
