import React, { useContext } from 'react';

import AppContext from '@src/store/context/index';

import style from './style.module.scss';

const LeftFeature = () => {
  const { store } = useContext(AppContext);

  const handleClear = () => {
    if (store.canvas) {
      const w = store.canvas.width;
      const h = store.canvas.height;
      store.context.clearRect(0, 0, w, h);
    }
  };

  return (
    <div className={style.leftFeatureContainer}>
      <div className={style.delete} onClick={handleClear}></div>
    </div>
  );
};

export default LeftFeature;
