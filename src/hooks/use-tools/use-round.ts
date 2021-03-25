import { UseWhiteBoardContext } from '@src/store';
import { getEvent } from '@util/util';
import { useCommonTools } from '@src/hooks/use-tools';
import { drawRound } from '@util/draw';

const useRound = () => {
  const { state } = UseWhiteBoardContext();
  const { updateImage, savaDataURLToHistory } = useCommonTools();
  const { templateContext, brushColor, lineWidth, templateCanvas } = state;
  let currX = 0;
  // let currY = 0;
  let flag = false;
  let canMoveEvent = false;
  let startX = 0;
  let startY = 0;

  const draw = () => {
    templateContext.clearRect(0, 0, templateCanvas.width, templateCanvas.height);
    const radius = Math.abs(currX - startX + lineWidth);
    drawRound(
      templateContext,
      startX + (currX - startX + lineWidth),
      startY,
      radius,
      brushColor,
      lineWidth
    );
  };

  const start = (e: any) => {
    const _event = getEvent(e);
    currX = _event.clientX;
    // currY = _event.clientY;
    flag = true;
    startX = _event.clientX;
    startY = _event.clientY;
  };

  const move = (e: any) => {
    if (flag) {
      canMoveEvent = true;
      const _event = getEvent(e);
      currX = _event.clientX;
      // currY = _event.clientY;
      draw();
    }
  };

  const end = () => {
    if (canMoveEvent) {
      canMoveEvent = false;
    } else {
      draw();
    }
    if (flag) {
      savaDataURLToHistory();
    }
    updateImage();
    flag = false;
  };

  return { start, move, end };
};

export default useRound;