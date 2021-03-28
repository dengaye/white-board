import React from 'react';

import ArrowLeftSvg from '@image/arrow-left.svg';
import ArrowRightSvg from '@image/arrow-right.svg';
import { UseWhiteBoardContext, ACTIONS } from '@src/store';

import s from '@style/common.scss';

const RevokeAndReconvery = () => {
  const { dispatch, state } = UseWhiteBoardContext();
  const { canvasHistory, canvas, canvasContext, canvasHistoryOfReconvery } = state;

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
      dispatch({ type: ACTIONS.SET_CANVAS_HISTORY, payload: newDataUrl });
      if (canvasHistoryOfReconvery[canvasHistoryOfReconvery.length - 1] !== '') {
        dispatch({
          type: ACTIONS.SET_CANVAS_HISTORY_OF_RECONVERY,
          payload: [...canvasHistoryOfReconvery, pop],
        });
      }
    }
  };

  const handleReconvery = () => {
    if (canvas && canvasHistoryOfReconvery.length) {
      const newDataUrl = [...canvasHistoryOfReconvery];
      const uri = newDataUrl[newDataUrl.length - 1];
      const pop = newDataUrl.pop();
      reDraw(uri);
      dispatch({ type: ACTIONS.SET_CANVAS_HISTORY_OF_RECONVERY, payload: newDataUrl });
      dispatch({ type: ACTIONS.SET_CANVAS_HISTORY, payload: [...canvasHistory, pop] });
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
