import React from 'react';

export interface IModalProps {
  visible: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  children?: any;
  showCloseIcon?: boolean;
}

import s from './style.scss';

function Modal(props: IModalProps) {
  const { visible, children, showCloseIcon } = props;
  if (!visible) {
    return null;
  }
  return (
    <>
      <div className={s.modalBackdrop} onClick={props.onCancel}></div>
      <div className={s.modalContainer}>
        <div className={s.modalContent}>
          {showCloseIcon && (
            <div className={s.modalClose} onClick={props.onCancel}>
              x
            </div>
          )}
          {children}
        </div>
      </div>
    </>
  );
}

export default React.memo(Modal);
