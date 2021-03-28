import React, { useCallback, useEffect, useRef, useState } from 'react';

import style from './style.scss';

interface ISliderProps {
  value?: number;
  updateValue: (value: number) => void;
  max?: number;
  classNameContainer?: string;
}

function Slider(props: ISliderProps) {
  const { value = 0, max = 100, classNameContainer } = props;
  const progressRef = useRef<any>({});
  const progressContentRef = useRef<any>({});
  const blockRef = useRef<any>({});
  const [isMove, setIsMove] = useState(false);
  const [start, setState] = useState(0);

  useEffect(() => {
    if (progressContentRef.current && blockRef.current) {
      const halfWidth = blockRef.current.offsetWidth / 2;
      let newValue = value;
      if (value === max) {
        newValue = progressRef.current.offsetWidth;
      }
      blockRef.current.style.left = `${newValue - halfWidth}px`;
      progressContentRef.current.style.width = `${newValue}px`;
    }
  }, []);

  const handleTouchStart = useCallback((e: any) => {
    if (e.target) {
      setIsMove(true);
      // 减去 offsetLeft，因为 block 的 left 每次 moveX - startX，需要再加上自身的 left
      setState(e.touches[0].clientX - e.target.offsetLeft);
    }
  }, []);

  const handleTouchMove = useCallback(
    (e: any) => {
      if (isMove && e.target) {
        const halfWidth = e.target.offsetWidth / 2;
        const progressOffsetWidth = progressRef.current.offsetWidth;
        const newOffsetX = Math.max(
          -halfWidth,
          Math.min(e.touches[0].clientX - start, progressOffsetWidth - halfWidth)
        );
        const left = `${newOffsetX}px`;
        e.target.style.left = left;
        const width = newOffsetX + halfWidth;
        progressContentRef.current.style.width = `${width}px`;
        props.updateValue((width / progressOffsetWidth) * max);
      }
    },
    [start, isMove]
  );

  const handleTouchEnd = useCallback(() => {
    setIsMove(false);
  }, []);

  return (
    <section className={`${style.progressContainer} ${classNameContainer}`}>
      <section className={style.progress} ref={progressRef}>
        <section className={style.progressContent} ref={progressContentRef}></section>
      </section>
      <section
        className={style.dragBlock}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={blockRef}
      >
        <section className={style.dragBlockContent}></section>
      </section>
    </section>
  );
}

export default React.memo(Slider);
