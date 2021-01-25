import React from 'react';

import style from './style.scss';

interface ISliderProps {
  max?: number;
  value: number;
  updateValue: (value: number) => void;
}

function Slider(props: ISliderProps) {
  const { max = 100, value } = props;
  let isMove = false;
  let start = 0;
  let offsetX = 0;

  const handleTouchStart = (e: any) => {
    if (e.target) {
      isMove = true;
      start = e.touches[0].clientX;
    }
  };

  const handleTouchMove = (e: any) => {
    if (isMove && e.target) {
      offsetX = Math.max(0, e.touches[0].clientX - start);
      e.target.style.left = `${((offsetX / 750) * 200) / 3}vw`;
    }
  };

  const handleTouchEnd = () => {
    isMove = false;
    props.updateValue(offsetX);
  };

  return (
    <section className={style.progressContainer}>
      <progress max={max} value={value} className={style.progress} />
      <section
        className={style.dragBlock}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <section className={style.dragBlockContent}></section>
      </section>
    </section>
  );
}

export default Slider;
