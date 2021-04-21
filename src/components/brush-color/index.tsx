import React, { useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { BRUSH_COLORS, MODE_TYPES } from '@src/contants';
import ColorModal from '@component/color-modal';
import { brushColorState, modeTypeState } from 'src/recoil';

import style from '@style/brush.scss';

const Brush = () => {
  const [brushColor, setBrushColor] = useRecoilState(brushColorState);
  const [modeType, setModeType] = useRecoilState(modeTypeState);
  const [selectColor, setSelectColor] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleBrushClick = (color: string, flag: boolean) => {
    if (flag && modeType !== MODE_TYPES.ERASER) {
      setShowModal(true);
    } else {
      setShowModal(false);
      setBrushColor(color);
    }
    if (modeType === MODE_TYPES.ERASER) {
      setModeType(MODE_TYPES.PENCIL);
    }
  };

  const handleSelectColor = useCallback((item: string) => {
    setBrushColor(item);
    setSelectColor(item);
    setShowModal(false);
  }, []);

  return (
    <>
      <div className={style.brushContent}>
        {[...BRUSH_COLORS, selectColor].map((item: string, index: number) => (
          <div
            key={index}
            className={brushColor === item && modeType !== MODE_TYPES.ERASER ? style.active : ''}
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
        brushColor={brushColor}
      />
    </>
  );
};

export default React.memo(Brush);
