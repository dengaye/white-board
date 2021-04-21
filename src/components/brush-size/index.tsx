import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import { BRUSH_SIZES } from '@src/contants';
import { getWidthOrHeightOfSize } from '@util/util';
import SizeModal from '@component/size-modal';
import { lineWidthState } from 'src/recoil';

import style from '@style/brush.scss';

const BrushColor = () => {
  const [lineWidth, setLineWidth] = useRecoilState(lineWidthState);
  const [showSizeModal, setShowSizeModal] = useState(false);

  const handleBrushSize = (size: number, flag: boolean) => {
    if (flag) {
      setShowSizeModal(true);
    } else {
      setLineWidth(size);
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
      <SizeModal
        visible={showSizeModal}
        onCancel={() => setShowSizeModal(false)}
        updateSize={setLineWidth}
        lineWidth={lineWidth}
      />
    </>
  );
};

export default React.memo(BrushColor);
