import { useEffect } from 'react';
import { UseWhiteBoardContext } from '@src/store';
import { touchable } from '@util/util';
import { MODE_TYPES } from '@src/contants';
import { usePencil, useEllipse, useEraser } from '@src/hooks/use-tools';

const touchEvent = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend',
};

const mouseEvent = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup',
};

const useControls = () => {
  const { state } = UseWhiteBoardContext();
  const { canvas, templateCanvas, modeType } = state;

  const pencilEvent = usePencil();
  const ellipseEvent = useEllipse();
  const eraserEvent = useEraser();

  useEffect(() => {
    if (!canvas && !templateCanvas) {
      return;
    }
    const initEvent = touchable ? touchEvent : mouseEvent;
    let handleEvent: any = {};
    switch (modeType) {
      case MODE_TYPES.PENCIL:
        handleEvent = pencilEvent;
        break;
      case MODE_TYPES.ERASER:
        handleEvent = eraserEvent;
        break;
      case MODE_TYPES.ELLIPSE:
        handleEvent = ellipseEvent;
        break;
      default:
        handleEvent = pencilEvent;
        break;
    }
    templateCanvas.addEventListener(initEvent.start, handleEvent.start);
    templateCanvas.addEventListener(initEvent.move, handleEvent.move);
    templateCanvas.addEventListener(initEvent.end, handleEvent.end);
    if (!touchable) {
      templateCanvas.addEventListener('mouseout', handleEvent.end);
    }
    return () => {
      templateCanvas.removeEventListener(initEvent.start, handleEvent.start);
      templateCanvas.removeEventListener(initEvent.move, handleEvent.move);
      templateCanvas.removeEventListener(initEvent.end, handleEvent.end);
      if (!touchable) {
        templateCanvas.removeEventListener('mouseout', handleEvent.end);
      }
    };
  }, [state]);

  return null;
};

export default useControls;
