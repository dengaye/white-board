import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import ArrowLeftSvg from '@image/arrow-left.svg';
import ArrowRightSvg from '@image/arrow-right.svg';
import {
  canvasHistoryState,
  canvasState,
  canvasContextState,
  canvasHistoryOfReconveryState,
} from 'src/recoil';

import s from '@style/common.scss';

const RevokeAndReconvery = () => {
  const [canvasHistory, setCanvasHistory] = useRecoilState(canvasHistoryState);
  const [canvasHistoryOfReconvery, setCanvasHistoryOfReconvery] = useRecoilState(
    canvasHistoryOfReconveryState
  );
  const canvas = useRecoilValue(canvasState);
  const canvasContext = useRecoilValue(canvasContextState);

  const reDraw = (uri: string) => {
    canvasContext.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    const image = new window.Image();
    image.src = uri;
    image.addEventListener('load', () => {
      canvasContext.drawImage(image, 0, 0);
    });
  };

  const handleRestore = () => {
    if (canvas && canvasHistory.length) {
      const newDataUrl = [...canvasHistory];
      const pop = newDataUrl.pop();
      const uri = newDataUrl[newDataUrl.length - 1];
      reDraw(uri);
      setCanvasHistory(newDataUrl);
      if (canvasHistoryOfReconvery[canvasHistoryOfReconvery.length - 1] !== '') {
        setCanvasHistoryOfReconvery([...canvasHistoryOfReconvery, pop]);
      }
    }
  };

  const handleReconvery = () => {
    if (canvas && canvasHistoryOfReconvery.length) {
      const newDataUrl = [...canvasHistoryOfReconvery];
      const uri = newDataUrl[newDataUrl.length - 1];
      const pop = newDataUrl.pop();
      reDraw(uri);
      setCanvasHistoryOfReconvery(newDataUrl);
      setCanvasHistory([...canvasHistory, pop]);
    }
  };

  return (
    <>
      <div
        className={`${s.iconWrap} ${canvasHistory?.length ? '' : s.disabled}`}
        onClick={handleRestore}
      >
        <img src={ArrowLeftSvg} alt='revoke' />
      </div>
      <div
        className={`${s.iconWrap} ${canvasHistoryOfReconvery?.length ? '' : s.disabled}`}
        onClick={handleReconvery}
      >
        <img src={ArrowRightSvg} alt='reconvery' />
      </div>
    </>
  );
};

export default React.memo(RevokeAndReconvery);
