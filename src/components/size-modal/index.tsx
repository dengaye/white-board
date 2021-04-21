import React, { useCallback } from 'react';
import Modal from '@component/modal';
import Slider from '@component/slider';
import style from './style.scss';

interface ISizeModalProps {
  visible: boolean;
  onCancel: () => void;
  updateSize: (size: number) => void;
  lineWidth: number;
}

const SizeModal = (props: ISizeModalProps) => {
  const { visible, lineWidth } = props;

  const updateValue = useCallback((value: number) => props.updateSize(value), []);

  return (
    <Modal visible={visible} onCancel={props.onCancel}>
      <Slider value={lineWidth} updateValue={updateValue} />
      <section className={style.sizeContent}>
        <span
          style={{
            width: `${lineWidth}px`,
            height: `${lineWidth}px`,
          }}
        ></span>
      </section>
    </Modal>
  );
};

export default React.memo(SizeModal);
