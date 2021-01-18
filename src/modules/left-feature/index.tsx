import React, { useContext } from 'react';

import { MODE_TYPES } from '@src/contants';
import DeleteSvg from '@image/delete.svg';
import EraserSvg from '@image/eraser.svg';
import ArrowLeftSvg from '@image/arrow-left.svg';
import ArrowRightSvg from '@image/arrow-right.svg';
import SaveImage from '@component/save-image/index';
import {
  setModeTypeByAction,
  setCanvasHistoryByAction,
  setCanvasHistoryOfReconveryByAction,
  WhiteBoadeContext,
} from '@src/store';

import style from './style.module.scss';

const LeftFeature = () => {
  const { dispatch, state } = useContext(WhiteBoadeContext);
  const { canvasHistory, modeType, canvas, canvasContext, canvasHistoryOfReconvery } = state;

  const handleClear = () => {
    if (canvas) {
      const w = canvas.width;
      const h = canvas.height;
      dispatch(setCanvasHistoryByAction([...canvasHistory, canvas.toDataURL()]));
      dispatch(setCanvasHistoryOfReconveryByAction([...canvasHistoryOfReconvery, '']));
      canvasContext.clearRect(0, 0, w, h);
    }
  };

  const isEraser = () => modeType === MODE_TYPES.ERASER;

  const handleEraser = () => {
    if (canvas) {
      if (!isEraser()) {
        dispatch(setModeTypeByAction(MODE_TYPES.ERASER));
      } else {
        dispatch(setModeTypeByAction(MODE_TYPES.LINE));
      }
    }
  };

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
      dispatch(setCanvasHistoryByAction(newDataUrl));
      if (canvasHistoryOfReconvery[canvasHistoryOfReconvery.length - 1] !== '') {
        dispatch(setCanvasHistoryOfReconveryByAction([...canvasHistoryOfReconvery, pop]));
      }
    }
  };

  const handleReconvery = () => {
    if (canvas && canvasHistoryOfReconvery.length) {
      const newDataUrl = [...canvasHistoryOfReconvery];
      const uri = newDataUrl[newDataUrl.length - 1];
      const pop = newDataUrl.pop();
      reDraw(uri);
      dispatch(setCanvasHistoryOfReconveryByAction(newDataUrl));
      dispatch(setCanvasHistoryByAction([...canvasHistory, pop]));
    }
  };

  return (
    <div className={style.leftFeatureContainer}>
      <div className={style.iconWrap} onClick={handleClear}>
        <img src={DeleteSvg} alt='delete' />
      </div>
      <div
        className={`${style.iconWrap} ${canvasHistory?.length ? '' : style.disabled}`}
        onClick={handleRestore}
      >
        <img src={ArrowLeftSvg} alt='revoke' />
      </div>
      <div
        className={`${style.iconWrap} ${canvasHistoryOfReconvery?.length ? '' : style.disabled}`}
        onClick={handleReconvery}
      >
        <img src={ArrowRightSvg} alt='reconvery' />
      </div>
      <SaveImage canvas={canvas} className={style.iconWrap} />
      <div
        className={`${style.iconWrap} ${style.eraser} ${isEraser() ? style.active : ''}`}
        onClick={handleEraser}
      >
        <img src={EraserSvg} alt='eraser' />
      </div>
    </div>
  );
};

export default LeftFeature;
