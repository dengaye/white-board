import React from 'react';
import SvgIcon from '@src/components/svg-icon';
import WindowIcon from '@src/images/window.svg';

import { createIframe, appendToBody } from '@util/dom';

import s from './style.scss';

const OpenWindow = () => {
  const handleCreateWindow = () => {
    const iframeDom = createIframe(window.location.href);
    appendToBody(iframeDom);
  };

  return (
    <section className={s.openContainer} onClick={handleCreateWindow}>
      <SvgIcon url={WindowIcon} className={s.openIcon} />
    </section>
  );
};

export default OpenWindow;
