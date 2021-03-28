import React from 'react';

import DeleteSvg from '@image/delete.svg';
import { UseWhiteBoardContext, ACTIONS } from '@src/store';

import s from '@style/common.scss';

const ClearContext = () => {
  const { dispatch, state } = UseWhiteBoardContext();
  const { canvasHistory, canvas, canvasContext, canvasHistoryOfReconvery } = state;

  const handleClear = () => {
    if (canvas) {
      const width = canvas.width;
      const height = canvas.height;
      dispatch({
        type: ACTIONS.SET_CANVAS_HISTORY,
        payload: [...canvasHistory, canvas.toDataURL()],
      });
      dispatch({
        type: ACTIONS.SET_CANVAS_HISTORY_OF_RECONVERY,
        payload: [...canvasHistoryOfReconvery, ''],
      });
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
