import React, { useState, useCallback } from 'react';

import { BRUSH_COLORS, BRUSH_SIZES, MODE_TYPES } from '@src/contants';

import {
  setBrushColorByAction,
  setLineWidthByAction,
  setModeTypeByAction,
  UseWhiteBoardContext,
} from '@src/store';
import { getWidthOrHeightOfSize } from '@util/util';

import SizeModal from '@component/size-modal';
import ColorModal from '@component/color-modal';
import style from './style.module.scss';

const Brush = () => {
  const { dispatch, state } = UseWhiteBoardContext();
  const { brushColor, lineWidth } = state;
  const [showModal, setShowModal] = useState(false);
  const [selectColor, setSelectColor] = useState('');
  const [showSizeModal, setShowSizeModal] = useState(false);

  const handleBrushClick = (color: string, flag: boolean) => {
    if (flag) {
      setShowModal(true);
    } else {
      setShowModal(false);
      dispatch(setBrushColorByAction(color));
      dispatch(setModeTypeByAction(MODE_TYPES.LINE));
    }
  };

  const handleBrushSize = (size: number, flag: boolean) => {
    if (flag) {
      setShowSizeModal(true);
    } else {
      dispatch(setLineWidthByAction(size));
      setShowSizeModal(false);
    }
  };

  const handleSelectColor = useCallback((item: string) => {
    dispatch(setBrushColorByAction(item));
    setSelectColor(item);
    setShowModal(false);
  }, []);

  return (
    <>
      <div className={style.brushContainer}>
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
        <div className={style.brushSize}>
          {BRUSH_SIZES.map((value: number, index: number) => (
            <div
              key={index + value}
              className={value === lineWidth ? style.active : ''}
              onClick={() => {
                handleBrushSize(value, lineWidth === value);
              }}
            >
              <span
                style={{
                  width: getWidthOrHeightOfSize(value),
                  height: getWidthOrHeightOfSize(value),
                }}
              ></span>
            </div>
          ))}
        </div>
      </div>
      <ColorModal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        updateColor={handleSelectColor}
      />
      <SizeModal visible={showSizeModal} onCancel={() => setShowSizeModal(false)} />
    </>
  );
};

export default React.memo(Brush);
