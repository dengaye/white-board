import React, { useState } from 'react';
import Modal from '@component/modal';
import Slider from '@component/slider';
import { getWidthOrHeightOfSize } from '@util/util';
import style from './style.scss';

interface ISizeModalProps {
  visible: boolean;
  onCancel: () => void;
}

const SizeModal = (props: ISizeModalProps) => {
  const { visible } = props;
  const [size, setSize] = useState(0);

  const updateValue = (value: number) => {
    setSize(value);
  };

  return (
    <Modal visible={visible} onCancel={props.onCancel}>
      <Slider value={size} updateValue={updateValue} />
      <section className={style.sizeContent}>
        <span
          style={{
            width: getWidthOrHeightOfSize(size),
            height: getWidthOrHeightOfSize(size),
          }}
        ></span>
      </section>
    </Modal>
  );
};

export default React.memo(SizeModal);
