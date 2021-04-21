import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { getEvent } from '@util/util';
import { drawLine } from '@util/draw';
import { useCommonTools } from '@src/hooks/use-tools';
import { templateContextState, brushColorState, lineWidthState } from 'src/recoil';

const usePencil = () => {
  const templateContext = useRecoilValue(templateContextState);
  const brushColor = useRecoilValue(brushColorState);
  const lineWidth = useRecoilValue(lineWidthState);
  const { updateImage, savaDataURLToHistory } = useCommonTools();
  let currX = 0;
  let currY = 0;
  let flag = false;
  let canMoveEvent = false;
  let prevX = 0;
  let prevY = 0;
  const points: any = [];
  // let count = 0;

  useEffect(() => {
    if (templateContext) {
      templateContext.globalCompositeOperation = 'source-over';
    }
  }, [templateContext]);

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
      // let b, a, g;
      canMoveEvent = true;
      prevX = currX;
      prevY = currY;
      const _event = getEvent(e);
      currX = _event.clientX;
      currY = _event.clientY;
      templateContext.lineCap = 'butt';
      draw();
      points.push([_event.clientX, _event.clientY]);
      // for (let i = 0; i < points.length; i++) {
      //   b = points[i][0] - points[count][0];
      //   a = points[i][1] - points[count][1];
      //   g = b * b + a * a;
      //   if (g < 2500 && Math.random() > 0.9) {
      //     templateContext.beginPath();
      //     templateContext.moveTo(points[count][0], points[count][1]);
      //     templateContext.lineTo(points[i][0], points[i][1]);
      //     templateContext.stroke();
      //   }
      // }
      // count++;
    }
  };

  const end = () => {
    if (canMoveEvent) {
      canMoveEvent = false;
    } else {
      prevX = currX;
      prevY = currY;
      templateContext.lineCap = 'round';
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
