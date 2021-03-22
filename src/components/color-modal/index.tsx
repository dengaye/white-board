import React from 'react';
import Modal from '@component/modal';
import { COLORS_MODAL } from '@src/contants';
import { UseWhiteBoardContext } from '@src/store';

import style from './style.scss';

interface IColorModalProps {
  visible: boolean;
  onCancel: () => void;
  updateColor: (color: string) => void;
}

function ColorModal(props: IColorModalProps) {
  const { visible } = props;
  const { state } = UseWhiteBoardContext();

  return (
    <Modal visible={visible} onCancel={props.onCancel}>
      <div className={style.selectColorContainer}>
        <div className={style.selectColorContent}>
          {COLORS_MODAL.map((item: string) => (
            <div
              key={item}
              className={`${style.selectColorItem} ${
                state.brushColor === item ? style.active : ''
              }`}
              style={{ backgroundColor: item }}
              onClick={() => props.updateColor(item)}
            ></div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default React.memo(ColorModal);
