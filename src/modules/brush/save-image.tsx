import React from 'react';

import { downloadFile } from '@util/util';
import DownloadSvg from '@image/download.svg';

import style from './style.module.scss';

interface ISaveImage {
  canvas: any;
}

const saveImage = (props: ISaveImage) => {
  const { canvas } = props;

  const handleDownload = () => {
    if (canvas) {
      const img = canvas.toDataURL('image/png');
      downloadFile(`download${+new Date()}.png`, img);
    }
  };

  return (
    <div className={style.saveImage} onClick={handleDownload}>
      <img src={DownloadSvg} />
    </div>
  );
};

export default saveImage;
