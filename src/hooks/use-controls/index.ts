import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { MODE_TYPES } from '@src/contants';
import { usePencil, useEllipse, useEraser } from '@src/hooks/use-tools';
import { canvasState, templateCanvasState, modeTypeState } from 'src/recoil';
import { RESULT_EVENTS, touchable } from '@util/events';

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
    templateCanvas.addEventListener(RESULT_EVENTS.start, handleEvent.start);
    templateCanvas.addEventListener(RESULT_EVENTS.move, handleEvent.move);
    templateCanvas.addEventListener(RESULT_EVENTS.end, handleEvent.end);
    if (!touchable) {
      templateCanvas.addEventListener('mouseout', handleEvent.end);
    }
    return () => {
      templateCanvas.removeEventListener(RESULT_EVENTS.start, handleEvent.start);
      templateCanvas.removeEventListener(RESULT_EVENTS.move, handleEvent.move);
      templateCanvas.removeEventListener(RESULT_EVENTS.end, handleEvent.end);
      if (!touchable) {
        templateCanvas.removeEventListener('mouseout', handleEvent.end);
      }
    };
  });

  return null;
};

export default useControls;
