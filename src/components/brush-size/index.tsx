import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { BRUSH_SIZES } from '@src/contants';
import { getWidthOrWidthOfSize } from '@util/util';
import SizeModal from '@component/size-modal';
import { lineWidthState } from 'src/recoil';

import style from '@style/brush.scss';

const BrushColor = () => {
  const [lineWidth, setLineWidth] = useRecoilState(lineWidthState);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [brushSize, setBrushSize] = useState(BRUSH_SIZES);

  useEffect(() => {
    if (showSizeModal) {
      return;
    }
    setBrushSize((prevSize: any) => {
      if (showSizeModal) {
        return;
      }
      const newSize = [...prevSize];
      const hasSize = newSize.includes(lineWidth);
      const hasSizeByOrigin = BRUSH_SIZES.includes(lineWidth);
      if (newSize.length === BRUSH_SIZES.length && !hasSize) {
        return [...newSize, lineWidth];
      }
      if (newSize.length > BRUSH_SIZES.length && !hasSizeByOrigin) {
        newSize.pop();
        return [...newSize, lineWidth];
      }
      return prevSize;
    });
  }, [lineWidth, showSizeModal]);

  const handleBrushSize = (size: number, flag: boolean) => {
    setShowSizeModal(!!flag);

    if (!flag) {
      setLineWidth(size);
    }
  };

  return (
    <>
      <div className={style.brushSize}>
        {brushSize.map((value: number, index: number) => (
          <div
            key={index + value}
            className={value === lineWidth ? style.active : ''}
            onClick={() => {
              handleBrushSize(value, lineWidth === value);
            }}
          >
            <span
              style={{
                width: getWidthOrWidthOfSize(value + 4),
                height: getWidthOrWidthOfSize(value + 4),
              }}
            ></span>
          </div>
        ))}
      </div>
      <SizeModal
        visible={showSizeModal}
        onCancel={() => setShowSizeModal(false)}
        updateSize={setLineWidth}
        size={lineWidth}
      />
    </>
  );
};

export default React.memo(BrushColor);
