import React from 'react';

export interface IModalProps {
  visible: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  children?: any;
}

import s from './style.scss';

export default function Modal(props: IModalProps) {
  const { visible, children } = props;
  if (!visible) {
    return null;
  }
  return (
    <>
      <div className={s.modalBackdrop}></div>
      <div className={s.modalContainer}>
        <div className={s.modalContent}>
          <div className={s.modalClose} onClick={props.onCancel}>
            x
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
