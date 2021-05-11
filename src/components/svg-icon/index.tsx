import React, { useCallback } from 'react';

import s from './style.scss';

interface ISvgIconProps {
  url: string;
  className?: string;
  onClick?: () => void;
}

const SvgIcon = (props: ISvgIconProps) => {
  const { url, className } = props;

  const handleClick = useCallback(() => {
    if (props.onClick) props.onClick();
  }, []);

  return (
    <span className={`${s.svgIcon} ${className}`} onClick={handleClick}>
      <img src={url} />
    </span>
  );
};

export default React.memo(SvgIcon);
