import React, { useContext } from 'react';

import AppContext from '@src/store/context/index';
import { downloadFile } from '@util/util';

import DownloadSvg from '@image/download.svg';

import style from './style.module.scss';

const saveImage = () => {
  const { store } = useContext(AppContext);

  const handleDownload = () => {
    if (store.canvas) {
      const img = store.canvas.toDataURL('image/png');
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
