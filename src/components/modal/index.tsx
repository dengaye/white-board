import React from 'react';
import SvgIcon from '@src/components/svg-icon';
import Close from '@src/images/close.svg';

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
    <section className={`${s.modalContainer} ${s.animated} ${s.backInUp}`}>
      <div className={s.modalBackdrop} onClick={props.onCancel}></div>
      <div className={s.modalContent}>
        {showCloseIcon && (
          <div className={s.modalClose} onClick={props.onCancel}>
            <SvgIcon url={Close} />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default React.memo(Modal);
