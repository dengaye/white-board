import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { touchable } from '@util/util';
import { MODE_TYPES } from '@src/contants';
import { usePencil, useEllipse, useEraser } from '@src/hooks/use-tools';
import { canvasState, templateCanvasState, modeTypeState } from 'src/recoil';

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
  const canvas = useRecoilValue(canvasState);
  const templateCanvas = useRecoilValue(templateCanvasState);
  const modeType = useRecoilValue(modeTypeState);

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
  });

  return null;
};

export default useControls;
