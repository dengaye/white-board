import React, { useState } from 'react';
import { IStore } from '@src/type';
import { SHAPE_TYPE } from '@src/contants';

import style from './style.module.scss';

interface IRightFeature {
  setModeType: any;
}

function RightFeature(props: IStore & IRightFeature) {
  const { modeType } = props;
  const [show, setShow] = useState(false);

  // const handleFold = () => {
  //   setShow(!show);
  // };

  const handleShape = (type: string) => {
    props.setModeType(type);
    setShow(false);
  };

  return (
    <div className={style.rightFeature}>
      <div className={style.shapeType}>
        <div className={style[modeType]}></div>
      </div>
      <div className={`${style.shapeContent} ${show && style.active}`}>
        {Object.values(SHAPE_TYPE).map((i: string) => (
          <div className={style.shapeItem} key={i} onClick={() => handleShape(i)}>
            <div className={style[i]}></div>
          </div>
        ))}
      </div>
      {/* <div className={`${style.fold} ${show && style.active}`} onClick={handleFold}></div> */}
    </div>
  );
}

export default RightFeature;
