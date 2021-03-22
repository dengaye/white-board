import React, { useCallback } from 'react';
import Modal from '@component/modal';
import Slider from '@component/slider';
import style from './style.scss';

import { setLineWidthByAction, UseWhiteBoardContext } from '@src/store';

interface ISizeModalProps {
  visible: boolean;
  onCancel: () => void;
}

const SizeModal = (props: ISizeModalProps) => {
  const { dispatch, state } = UseWhiteBoardContext();
  const { visible } = props;

  const updateValue = useCallback((value: number) => {
    dispatch(setLineWidthByAction(value));
  }, []);

  return (
    <Modal visible={visible} onCancel={props.onCancel}>
      <Slider value={state.lineWidth} updateValue={updateValue} />
      <section className={style.sizeContent}>
        <span
          style={{
            width: `${state.lineWidth}px`,
            height: `${state.lineWidth}px`,
          }}
        ></span>
      </section>
    </Modal>
  );
};

export default React.memo(SizeModal);
