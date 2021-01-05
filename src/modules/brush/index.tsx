import React, { useState } from 'react';

import { BRUSH_COLORS, BRUSH_SIZES, MODE_TYPES } from '@src/contants';
import { IStore } from '@src/type';
import {
  setBrushColorByAction,
  setLineWidthByAction,
  setModeTypeByAction,
} from '@src/store/actions';

import Modal from '@component/modal';
import { COLORS } from './constant';
import style from './style.module.scss';

interface IBrushProps {
  brushColor: string;
  dispatch: any;
}

const Brush = (props: IBrushProps & IStore) => {
  const { brushColor, dispatch } = props;
  const [showModal, setShowModal] = useState(false);
  const [selectColor, setSelectColor] = useState('');
  const handleBrushClick = (color: string, flag: boolean) => {
    if (flag) {
      setShowModal(true);
    } else {
      setShowModal(false);
      dispatch(setBrushColorByAction(color));
      dispatch(setModeTypeByAction(MODE_TYPES.LINE));
    }
  };

  const handleBrushSize = (size: number) => dispatch(setLineWidthByAction(size));

  const handleSelectColor = (item: string) => {
    dispatch(setBrushColorByAction(item));
    setSelectColor(item);
    setShowModal(false);
  };

  return (
    <>
      <div className={style.brushContainer}>
        <div className={style.brushContent}>
          {BRUSH_COLORS.map((item: string, index: number) => (
            <div
              key={index}
              className={
                brushColor === item && props.modeType !== MODE_TYPES.ERASER ? style.active : ''
              }
              onClick={() => {
                handleBrushClick(item, brushColor === item);
              }}
            ></div>
          ))}
          <div
            className={
              brushColor === selectColor && props.modeType !== MODE_TYPES.ERASER ? style.active : ''
            }
            style={{ backgroundColor: selectColor }}
            onClick={() => {
              handleBrushClick(selectColor, props.brushColor === selectColor);
            }}
          ></div>
        </div>
        <div className={style.brushSize}>
          {BRUSH_SIZES.map((value: number, index: number) => (
            <div
              key={index + value}
              className={value === props.lineWidth ? style.active : ''}
              onClick={() => {
                handleBrushSize(value);
              }}
            >
              <span></span>
            </div>
          ))}
        </div>
      </div>
      <Modal visible={showModal} onCancel={() => setShowModal(false)}>
        <div className={style.selectColorContainer}>
          <div className={style.selectColorContent}>
            {COLORS.map((item: string) => (
              <div
                key={item}
                className={`${style.selectColorItem} ${selectColor === item ? style.active : ''}`}
                style={{ backgroundColor: item }}
                onClick={() => handleSelectColor(item)}
              ></div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Brush;
