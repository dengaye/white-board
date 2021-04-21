import React, { useEffect, useRef } from 'react';
import useCanvas from 'src/hooks/use-canvas';
import useControl from '@src/hooks/use-controls';

const CanvasContainer = () => {
  const { setCanvas, setContext, setTemplateCanvas, setTemplateContext } = useCanvas();
  const canvasRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef?.current) {
      return;
    }
    const canvasDOM = canvasRef.current;
    const context = canvasDOM.getContext('2d');
    const container = canvasDOM.parentNode;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvasDOM.width = width;
    canvasDOM.height = height;

    function createTemplateCanvas() {
      const templateCanvasDOM = window.document.createElement('canvas');
      const templateContext = templateCanvasDOM.getContext('2d');

      templateCanvasDOM.id = 'template-canvas';
      templateCanvasDOM.width = width;
      templateCanvasDOM.height = height;
      container.appendChild(templateCanvasDOM);
      setTemplateCanvas(templateCanvasDOM);
      setTemplateContext(templateContext);
    }

    createTemplateCanvas();
    setCanvas(canvasDOM);
    setContext(context);
  }, []);

  useControl();

  return <canvas ref={canvasRef}></canvas>;
};

export default CanvasContainer;
