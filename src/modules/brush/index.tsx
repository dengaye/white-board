import React from 'react';

import { BRUSH_COLORS, BRUSH_SIZES, MODE_TYPES } from '@src/contants';
import SaveImage from './save-image';
import { IStore } from '@src/type';

import style from './style.module.scss';

interface IBrushProps {
  setBrushColor: any;
  setModeType: any;
  setLineWidth: any;
}

const Brush = (props: IBrushProps & IStore) => {
  const { canvas } = props;

  const handleBrushClick = (color: string) => {
    props.setBrushColor(color);
    props.setModeType(MODE_TYPES.BRUSH);
  };

  const handleBrushSize = (size: number) => props.setLineWidth(size);

  return (
    <div className={style.brushContainer}>
      <div className={style.brushContent}>
        {BRUSH_COLORS.map((item: string, index: number) => (
          <div
            key={index}
            className={
              props.brushColor === item && props.modeType === MODE_TYPES.BRUSH ? style.active : ''
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
            className={value === props.lineWidth ? style.active : ''}
            onClick={() => {
              handleBrushSize(value);
            }}
          >
            <span></span>
          </div>
        ))}
      </div>
      <SaveImage canvas={canvas} />
    </div>
  );
};

export default Brush;
