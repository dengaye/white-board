import React, { useMemo } from 'react';

import { setModeTypeByAction, UseWhiteBoardContext } from '@src/store';
import { MODE_TYPES } from '@src/contants';
import EraserSvg from '@image/eraser.svg';

import s from '@style/common.scss';
import s1 from './style.scss';

const Eraser = () => {
  const { dispatch, state } = UseWhiteBoardContext();
  const { modeType, canvas } = state;

  const isEraser = useMemo(() => modeType === MODE_TYPES.ERASER, [modeType]);

  const handleEraser = () => {
    if (canvas) {
      if (!isEraser) {
        dispatch(setModeTypeByAction(MODE_TYPES.ERASER));
      } else {
        dispatch(setModeTypeByAction(MODE_TYPES.LINE));
      }
    }
  };

  return (
    <div
      className={`${s.iconWrap} ${s1.eraser} ${isEraser ? s.active : ''}`}
      onClick={handleEraser}
    >
      <img src={EraserSvg} alt='eraser' />
    </div>
  );
};

export default React.memo(Eraser);
