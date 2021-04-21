import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import DeleteSvg from '@image/delete.svg';
import {
  canvasHistoryState,
  canvasState,
  canvasContextState,
  canvasHistoryOfReconveryState,
} from 'src/recoil';

import s from '@style/common.scss';

const ClearContext = () => {
  const [canvasHistory, setCanvasHistory] = useRecoilState(canvasHistoryState);
  const [canvasHistoryOfReconvery, setCanvasHistoryOfReconvery] = useRecoilState(
    canvasHistoryOfReconveryState
  );
  const canvas = useRecoilValue(canvasState);
  const canvasContext = useRecoilValue(canvasContextState);

  const handleClear = () => {
    if (canvas) {
      const width = canvas.width;
      const height = canvas.height;
      setCanvasHistory([...canvasHistory, canvas.toDataURL()]);
      setCanvasHistoryOfReconvery([...canvasHistoryOfReconvery, '']);
      canvasContext.clearRect(0, 0, width, height);
    }
  };

  return (
    <div className={s.iconWrap} onClick={handleClear}>
      <img src={DeleteSvg} alt='delete' />
    </div>
  );
};

export default React.memo(ClearContext);
