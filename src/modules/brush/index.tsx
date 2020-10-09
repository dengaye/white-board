import React, { useContext } from 'react';

import AppContext from '@src/store/context/index';
import { setBrushColor, setLintWidth, setDrawMode } from '@store/context/action';
import { BRUSH_COLORS, BRUSH_SIZES, MODE_TYPES } from '@src/contants';
import SaveImage from './save-image';

import style from './style.module.scss';

const Brush = () => {
  const { dispatch, store } = useContext(AppContext);

  const handleBrushClick = (color: string) => {
    dispatch(setDrawMode(MODE_TYPES.BRUSH));
    dispatch(setBrushColor(color));
  };

  const handleBrushSize = (size: number) => {
    dispatch(setLintWidth(size));
  };

  return (
    <div className={style.brushContainer}>
      <div className={style.brushContent}>
        {BRUSH_COLORS.map((item: string, index: number) => (
          <div
            key={index}
            className={
              store.brushColor === item && store.modeType === MODE_TYPES.BRUSH ? style.active : ''
            }
            onClick={() => {
              handleBrushClick(item);
            }}
          ></div>
        ))}
      </div>
      <div className={style.brushSize}>
        {BRUSH_SIZES.map((value: number, index: number) => (
          <div
            key={index + value}
            className={value === store.lineWidth ? style.active : ''}
            onClick={() => {
              handleBrushSize(value);
            }}
          >
            <span></span>
          </div>
        ))}
      </div>
      <SaveImage />
    </div>
  );
};

export default Brush;
