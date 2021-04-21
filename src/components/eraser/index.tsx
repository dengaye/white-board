import React, { useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { MODE_TYPES } from '@src/contants';
import EraserSvg from '@image/eraser.svg';
import { canvasState, modeTypeState } from 'src/recoil';

import s from '@style/common.scss';
import s1 from './style.scss';

const Eraser = () => {
  const canvas = useRecoilValue(canvasState);
  const [modeType, setModeType] = useRecoilState(modeTypeState);

  const isEraser = useMemo(() => modeType === MODE_TYPES.ERASER, [modeType]);

  const handleEraser = () => {
    if (canvas) {
      if (!isEraser) {
        setModeType(MODE_TYPES.ERASER);
      } else {
        setModeType(MODE_TYPES.PENCIL);
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
