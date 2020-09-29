import React, { useContext } from 'react';

import AppContext from '@src/store/context/index';
import { setBrushColor, setLintWidth } from '@store/context/action';
import { BRUSH_COLORS, BRUSH_SIZES } from '@src/contants';

import style from './style.module.scss';

const Brush = () => {
  const { dispatch } = useContext(AppContext);

  const handleBrushs = (e: any) => {
    const targetAttrubute = e.target.getAttribute('data-color');
    if (targetAttrubute) {
      const allChild = e.currentTarget.querySelectorAll('div');
      for (let i = 0, l = allChild.length; i < l; i++) {
        allChild[i].setAttribute('class', '');
      }
      e.target.setAttribute('class', style.active);
      dispatch(setBrushColor(targetAttrubute));
    }
  };

  const handleBrushSize = (e: any) => {
    const targetAttrubute = e.target.getAttribute('data-size');
    if (targetAttrubute) {
      const allChild = e.currentTarget.querySelectorAll('div');
      for (let i = 0, l = allChild.length; i < l; i++) {
        allChild[i].setAttribute('class', '');
      }
      e.target.setAttribute('class', style.active);
      dispatch(setLintWidth(targetAttrubute));
    }
  };

  return (
    <div className={style.brushContainer}>
      <div className={style.brushContent} onClick={handleBrushs}>
        {BRUSH_COLORS.map((item: string, index: number) => (
          <div key={index} data-color={item} className={index === 0 ? style.active : ''}></div>
        ))}
      </div>
      <div className={style.brushSize} onClick={handleBrushSize}>
        {BRUSH_SIZES.map((value: number, index: number) => (
          <div key={index + value} data-size={value} className={index === 0 ? style.active : ''}>
            <span></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brush;
