import React from 'react';

import ClearContext from '@src/components/clear-context';
import RevokeAndReconvery from '@src/components/revoke-and-reconvery';
import Eraser from '@component/eraser';
import SaveImage from '@component/save-image/index';

import s from '@style/common.scss';
import style from './style.module.scss';

const LeftFeature = () => (
  <div className={style.leftFeatureContainer}>
    <ClearContext />
    <RevokeAndReconvery />
    <SaveImage className={s.iconWrap} />
    <Eraser />
  </div>
);

export default React.memo(LeftFeature);
