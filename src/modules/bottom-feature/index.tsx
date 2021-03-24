import React from 'react';

import BrushColor from '@component/brush-color';
import BrushSize from '@component/brush-size';

import style from './style.module.scss';

const BottomFeature = () => (
  <div className={style.brushContainer}>
    <BrushColor />
    <BrushSize />
  </div>
);

export default BottomFeature;
