import { useRecoilValue, useRecoilState } from 'recoil';
import {
  canvasState,
  canvasContextState,
  canvasHistoryState,
  templateCanvasState,
  templateContextState,
} from 'src/recoil';

function useCommonTools() {
  const canvas = useRecoilValue(canvasState);
  const canvasContext = useRecoilValue(canvasContextState);
  const templateCanvas = useRecoilValue(templateCanvasState);
  const templateContext = useRecoilValue(templateContextState);
  const [canvasHistory, setCanvasHistory] = useRecoilState(canvasHistoryState);
  function updateImage() {
    canvasContext.drawImage(templateCanvas, 0, 0);
    templateContext.clearRect(0, 0, templateCanvas.width, templateCanvas.height);
  }

  function savaDataURLToHistory() {
    const newCanvasHistory = [...canvasHistory];
    newCanvasHistory.push(canvas.toDataURL());
    setCanvasHistory(newCanvasHistory);
  }
  return { updateImage, savaDataURLToHistory };
}

export default useCommonTools;
