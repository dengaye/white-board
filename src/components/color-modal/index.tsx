import React, { useState } from 'react';
import Modal from '@component/modal';
import Slider from '@component/slider';
import { COLORS_MODAL } from '@src/contants';

import style from './style.scss';

interface IColorModalProps {
  visible: boolean;
  onCancel: () => void;
  updateColor: (color: string) => void;
  brushColor: string;
}

interface ISliderItem {
  max?: number;
  value: number;
  label: string;
  change: (value: number) => void;
}

function ColorModal(props: IColorModalProps) {
  const { visible, brushColor } = props;
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [opacity, setOpacity] = useState(100);

  const sliderItems = [
    {
      max: 256,
      label: 'r',
      value: red,
      change: (value: number) => setRed(value),
    },
    {
      max: 256,
      label: 'g',
      value: green,
      change: (value: number) => setGreen(value),
    },
    {
      max: 256,
      label: 'b',
      value: blue,
      change: (value: number) => setBlue(value),
    },
    {
      max: 100,
      label: 'a',
      value: opacity,
      change: (value: number) => setOpacity(value),
    },
  ];

  return (
    <Modal visible={visible} onCancel={props.onCancel}>
      <div className={style.selectColorContainer}>
        <div className={style.selectColorContent}>
          {COLORS_MODAL.map((item: string) => (
            <div
              key={item}
              className={`${style.selectColorItem} ${brushColor === item ? style.active : ''}`}
              style={{ backgroundColor: item }}
              onClick={() => props.updateColor(item)}
            ></div>
          ))}
        </div>
        <section className={style.colorControlsContainer}>
          {sliderItems.map((item: ISliderItem, index: number) => (
            <section className={style.sliderItem} key={index}>
              <span>{item.label}</span>
              <Slider
                value={item.value}
                classNameContainer={style.sliderConteiner}
                max={item.max}
                updateValue={item.change}
              />
            </section>
          ))}
          <section
            className={style.previewColor}
            style={{ backgroundColor: `rgba(${red}, ${green}, ${blue}, ${opacity / 100})` }}
            onClick={() => props.updateColor(`rgba(${red}, ${green}, ${blue}, ${opacity / 100})`)}
          ></section>
        </section>
      </div>
    </Modal>
  );
}

export default React.memo(ColorModal);
