import { UseWhiteBoardContext, setCanvasHistoryByAction } from '@src/store';

function useCommonTools() {
  const { dispatch, state } = UseWhiteBoardContext();
  const { canvas, canvasContext, canvasHistory, templateCanvas, templateContext } = state;
  function updateImage() {
    canvasContext.drawImage(templateCanvas, 0, 0);
    templateContext.clearRect(0, 0, templateCanvas.width, templateCanvas.height);
  }

  function savaDataURLToHistory() {
    const newCanvasHistory = [...canvasHistory];
    newCanvasHistory.push(canvas.toDataURL());
    dispatch(setCanvasHistoryByAction(newCanvasHistory));
  }
  return { updateImage, savaDataURLToHistory };
}

export default useCommonTools;
