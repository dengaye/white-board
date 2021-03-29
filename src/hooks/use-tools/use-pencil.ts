import { UseWhiteBoardContext } from '@src/store';
import { getEvent } from '@util/util';
import { drawLine } from '@util/draw';
import { useCommonTools } from '@src/hooks/use-tools';

const usePencil = () => {
  const { state } = UseWhiteBoardContext();
  const { updateImage, savaDataURLToHistory } = useCommonTools();
  const { templateContext, brushColor, lineWidth } = state;
  let currX = 0;
  let currY = 0;
  let flag = false;
  let canMoveEvent = false;
  let prevX = 0;
  let prevY = 0;

  const draw = () => {
    templateContext.strokeStyle = brushColor;
    templateContext.lineWidth = lineWidth;
    drawLine(templateContext, prevX, prevY, currX, currY);
    updateImage();
  };

  const start = (e: any) => {
    prevX = currX;
    prevY = currY;
    const _event = getEvent(e);
    currX = _event.clientX;
    currY = _event.clientY;
    flag = true;
  };

  const move = (e: any) => {
    if (flag) {
      canMoveEvent = true;
      prevX = currX;
      prevY = currY;
      const _event = getEvent(e);
      currX = _event.clientX;
      currY = _event.clientY;
      draw();
    }
  };

  const end = () => {
    if (canMoveEvent) {
      canMoveEvent = false;
    } else {
      prevX = currX;
      prevY = currY;
      draw();
    }
    if (flag) {
      savaDataURLToHistory();
    }
    flag = false;
  };

  return { start, move, end };
};

export default usePencil;
