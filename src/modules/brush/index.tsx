import React, { useContext } from 'react';

import AppContext from '@src/store/context/index';
import { setBrushColor } from '@store/context/action';

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

  return (
    <div className={style.brushContainer}>
      <div className={style.brushContent} onClick={handleBrushs}>
        <div data-color='black' className={style.active}></div>
        <div data-color='red'></div>
      </div>
    </div>
  );
};

export default Brush;
