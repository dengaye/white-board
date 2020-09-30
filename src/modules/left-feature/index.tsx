import React, { useContext } from 'react';

import AppContext from '@store/context/index';
import { setDrawMode } from '@store/context/action';
import { MODE_TYPES } from '@src/contants';
import DeleteSvg from '@image/delete.svg';
import EraserSvg from '@image/eraser.svg';

import style from './style.module.scss';

const LeftFeature = () => {
  const { store, dispatch } = useContext(AppContext);

  const handleClear = () => {
    if (store.canvas) {
      const w = store.canvas.width;
      const h = store.canvas.height;
      store.context.clearRect(0, 0, w, h);
    }
  };

  const isEraser = () => store.modeType === MODE_TYPES.ERASER;

  const handleEraser = () => {
    if (store.canvas) {
      if (!isEraser()) {
        dispatch(setDrawMode(MODE_TYPES.ERASER));
      } else {
        dispatch(setDrawMode(MODE_TYPES.BRUSH));
      }
    }
  };

  return (
    <div className={style.leftFeatureContainer}>
      <div className={style.delete} onClick={handleClear}>
        <img src={DeleteSvg} alt='delete' />
      </div>
      <div className={`${style.eraser} ${isEraser() ? style.active : ''}`} onClick={handleEraser}>
        <img src={EraserSvg} alt='eraser' />
      </div>
    </div>
  );
};

export default LeftFeature;
