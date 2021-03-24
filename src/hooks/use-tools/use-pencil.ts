import { UseWhiteBoardContext } from '@src/store';
import { getEvent } from '@util/util';
import { useCommonTools } from '@src/hooks/use-tools';

const usePencil = () => {
  const { state } = UseWhiteBoardContext();
  const { updateImage, savaDataURLToHistory } = useCommonTools();
  const { templateContext, brushColor, lineWidth } = state;
  let currX = 0;
  let currY = 0;
  let flag = false;
  let canMoveEvent = false;

  const draw = () => {
    templateContext.lineTo(currX, currY);
    templateContext.strokeStyle = brushColor;
    templateContext.lineWidth = lineWidth;
    templateContext.lineCap = 'round';
    templateContext.stroke();
    updateImage();
  };

  const start = (e: any) => {
    const _event = getEvent(e);
    currX = _event.clientX;
    currY = _event.clientY;
    flag = true;
    templateContext.beginPath();
    templateContext.moveTo(_event.clientX, _event.clientY);
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

export default usePencil;
