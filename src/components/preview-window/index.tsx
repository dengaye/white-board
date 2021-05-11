import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { showPreviewWindowState, iframeMapState } from '@src/recoil';
import SvgIcon from '@src/components/svg-icon';
import Close from '@src/images/close.svg';
import { createIframe, appendToBody } from '@util/dom';

import s from './style.scss';

const PreviewWindow = () => {
  const [showPreviewWindow, setShowPreviewWindow] = useRecoilState(showPreviewWindowState);
  const [iframeMap, setIframeMap] = useRecoilState(iframeMapState);

  const handleClose = useCallback(() => {
    setShowPreviewWindow(false);
  }, []);

  const handleAdd = () => {
    const prevIframeDom = document.querySelector('iframe');
    if (prevIframeDom) {
    }
    const iframeId = new Date().getTime() + '';
    const iframeDom = createIframe(window.location.href, iframeId);
    setIframeMap({
      ...iframeMap,
      [iframeId]: iframeDom,
    });
    appendToBody(iframeDom);
    handleClose();
  };

  if (!showPreviewWindow) return null;

  return (
    <section className={s.previewContainer}>
      <section className={s.previewContent}></section>
      <section className={s.footer}>
        <span className={s.addBtn} onClick={handleAdd}>
          +
        </span>
        <SvgIcon className={s.closeBtn} url={Close} onClick={handleClose} />
      </section>
    </section>
  );
};

export default PreviewWindow;
