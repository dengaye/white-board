import React from 'react';
import { useRecoilValue } from 'recoil';

import { downloadFile } from '@util/util';
import DownloadSvg from '@image/download.svg';
import { canvasState } from 'src/recoil';

import style from './style.module.scss';

interface ISaveImage {
  className?: string;
}

const SaveImage = (props: ISaveImage) => {
  const canvas = useRecoilValue(canvasState);

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

export default React.memo(SaveImage);
