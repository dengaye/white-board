import React from 'react';

import s from './style.scss';

interface ISvgIconProps {
  url: string;
  className?: string;
}

const SvgIcon = (props: ISvgIconProps) => {
  const { url, className } = props;

  return (
    <span className={`${s.svgIcon} ${className}`}>
      <img src={url} />
    </span>
  );
};

export default SvgIcon;
