import { UseWhiteBoardContext, ACTIONS } from '@src/store';

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
    dispatch({ type: ACTIONS.SET_CANVAS_HISTORY, payload: newCanvasHistory });
  }
  return { updateImage, savaDataURLToHistory };
}

export default useCommonTools;
