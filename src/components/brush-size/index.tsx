import React, { useState } from 'react';

import { BRUSH_SIZES } from '@src/contants';
import { setLineWidthByAction, UseWhiteBoardContext } from '@src/store';
import { getWidthOrHeightOfSize } from '@util/util';
import SizeModal from '@component/size-modal';

import style from '@style/brush.scss';

const BrushColor = () => {
  const { dispatch, state } = UseWhiteBoardContext();
  const { lineWidth } = state;
  const [showSizeModal, setShowSizeModal] = useState(false);

  const handleBrushSize = (size: number, flag: boolean) => {
    if (flag) {
      setShowSizeModal(true);
    } else {
      dispatch(setLineWidthByAction(size));
      setShowSizeModal(false);
    }
  };

  return (
    <>
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
      <SizeModal visible={showSizeModal} onCancel={() => setShowSizeModal(false)} />
    </>
  );
};

export default React.memo(BrushColor);
