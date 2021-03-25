import { UseWhiteBoardContext } from '@src/store';
import { getEvent } from '@util/util';
import { useCommonTools } from '@src/hooks/use-tools';

const useEraser = () => {
  const { state } = UseWhiteBoardContext();
  const { updateImage, savaDataURLToHistory } = useCommonTools();
  const { templateContext, canvasContext, lineWidth, canvas } = state;
  let currX = 0;
  let currY = 0;
  let flag = false;
  let canMoveEvent = false;

  const draw = () => {
    templateContext.drawImage(canvas, 0, 0);
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    const n = lineWidth / 2;
    templateContext.clearRect(currX - n, currY - n, lineWidth, lineWidth);
    updateImage();
  };

  const start = (e: any) => {
    const _event = getEvent(e);
    currX = _event.clientX;
    currY = _event.clientY;
    flag = true;
  };

  const move = (e: any) => {
    if (flag) {
      canMoveEvent = true;
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
      draw();
    }
    if (flag) {
      savaDataURLToHistory();
    }
    flag = false;
  };

  return { start, move, end };
};

export default useEraser;