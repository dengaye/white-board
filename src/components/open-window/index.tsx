import React from 'react';
import { useSetRecoilState } from 'recoil';
import SvgIcon from '@src/components/svg-icon';
import WindowIcon from '@src/images/window.svg';
import { showPreviewWindowState } from '@src/recoil';

import s from './style.scss';

const OpenWindow = () => {
  const setShowPreviewWindow = useSetRecoilState(showPreviewWindowState);

  const handleCreateWindow = () => {
    setShowPreviewWindow(true);
  };

  return (
    <section className={s.openContainer} onClick={handleCreateWindow}>
      <SvgIcon url={WindowIcon} className={s.openIcon} />
    </section>
  );
};

export default OpenWindow;
