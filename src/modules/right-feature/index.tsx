import React from 'react';
import SwitchModeType from '@component/switch-mode-type';

import style from './style.module.scss';

const RightFeature = () => (
  <div className={style.rightFeature}>
    <SwitchModeType />
  </div>
);

export default React.memo(RightFeature);
