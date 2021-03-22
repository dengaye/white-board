import React from 'react';

import { UseWhiteBoardContext } from '@src/store';
import { downloadFile } from '@util/util';
import DownloadSvg from '@image/download.svg';

import style from './style.module.scss';

interface ISaveImage {
  className?: string;
}

const saveImage = (props: ISaveImage) => {
  const {
    state: { canvas },
  } = UseWhiteBoardContext();

  const handleDownload = () => {
    if (canvas) {
      const img = canvas.toDataURL('image/png');
      downloadFile(`download${+new Date()}.png`, img);
    }
  };

  return (
    <div className={`${style.saveImage} ${props.className}`} onClick={handleDownload}>
      <img src={DownloadSvg} />
    </div>
  );
};

export default React.memo(saveImage);
