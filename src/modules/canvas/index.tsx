import React, { useEffect, useContext, useState } from 'react';

import AppContext from '@src/store/context/index';
import { setCanvasByAction, setContextByAction } from '@store/context/action';
import Controls from '@util/controls';

const NewControl = new Controls({});

const CanvasContainer = () => {
  const { dispatch, store } = useContext(AppContext);
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    const canvasDOM = window.document.getElementById('canvas') as any;
    const context = canvasDOM.getContext('2d');

    if (canvasDOM) {
      canvasDOM.width = window.innerWidth;
      canvasDOM.height = window.innerHeight;
      dispatch(setCanvasByAction(canvasDOM));
      dispatch(setContextByAction(context));
    }
  }, []);

  useEffect(() => {
    if (store.canvas && !isMount) {
      setMount(true);
      NewControl.init(store);
    }
  }, [store]);

  useEffect(() => {
    if (store.canvas && isMount) {
      NewControl.update(store);
      NewControl.update(store);
    }
  }, [store.brushColor, store.lineWidth, store.modeType]);

  return <canvas id='canvas'></canvas>;
};

export default CanvasContainer;
