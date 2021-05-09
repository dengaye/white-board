import React from 'react';

import BrushColor from '@component/brush-color';
import BrushSize from '@component/brush-size';
// import OpenWindow from '@component/open-window';

import style from './style.module.scss';

const BottomFeature = () => (
  <div className={style.brushContainer}>
    <BrushColor />
    {/* <OpenWindow /> */}
    <BrushSize />
  </div>
);

export default BottomFeature;
