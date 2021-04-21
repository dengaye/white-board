import { useSetRecoilState } from 'recoil';
import {
  canvasState,
  canvasContextState,
  templateCanvasState,
  templateContextState,
} from '@src/recoil';

const useCanvas = () => {
  const setCanvas = useSetRecoilState(canvasState);
  const setContext = useSetRecoilState(canvasContextState);
  const setTemplateCanvas = useSetRecoilState(templateCanvasState);
  const setTemplateContext = useSetRecoilState(templateContextState);

  return { setCanvas, setContext, setTemplateCanvas, setTemplateContext };
};

export default useCanvas;
