import React, { useState, useCallback } from 'react';

import { BRUSH_COLORS, MODE_TYPES } from '@src/contants';
import { setBrushColorByAction, setModeTypeByAction, UseWhiteBoardContext } from '@src/store';
import ColorModal from '@component/color-modal';

import style from '@style/brush.scss';

const Brush = () => {
  const { dispatch, state } = UseWhiteBoardContext();
  const { brushColor, modeType } = state;
  const [selectColor, setSelectColor] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleBrushClick = (color: string, flag: boolean) => {
    if (flag && modeType !== MODE_TYPES.ERASER) {
      setShowModal(true);
    } else {
      setShowModal(false);
      dispatch(setBrushColorByAction(color));
    }
    if (modeType === MODE_TYPES.ERASER) {
      dispatch(setModeTypeByAction(MODE_TYPES.LINE));
    }
  };

  const handleSelectColor = useCallback((item: string) => {
    dispatch(setBrushColorByAction(item));
    setSelectColor(item);
    setShowModal(false);
  }, []);

  return (
    <>
      <div className={style.brushContent}>
        {[...BRUSH_COLORS, selectColor].map((item: string, index: number) => (
          <div
            key={index}
            className={
              brushColor === item && state.modeType !== MODE_TYPES.ERASER ? style.active : ''
            }
            style={{ backgroundColor: item }}
            onClick={() => {
              handleBrushClick(item, brushColor === item);
            }}
          ></div>
        ))}
      </div>
      <ColorModal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        updateColor={handleSelectColor}
      />
    </>
  );
};

export default React.memo(Brush);
