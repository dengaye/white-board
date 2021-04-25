import React from 'react';
import Modal from '@component/modal';
import Slider from '@component/slider';
import { getWidthOrWidthOfSize } from '@util/util';
import style from './style.scss';

interface ISizeModalProps {
  visible: boolean;
  onCancel: () => void;
  updateSize: (size: number) => void;
  size: number;
}

const SizeModal = (props: ISizeModalProps) => {
  const { visible, size } = props;

  const updateValue = (value: number) => props.updateSize(value);

  return (
    <Modal visible={visible} onCancel={props.onCancel}>
      <Slider value={size} updateValue={updateValue} />
      <section className={style.sizeContent}>
        <span
          style={{
            width: getWidthOrWidthOfSize(size),
            height: getWidthOrWidthOfSize(size),
          }}
        ></span>
      </section>
    </Modal>
  );
};

export default React.memo(SizeModal);
