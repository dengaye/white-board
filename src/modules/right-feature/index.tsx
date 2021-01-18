import React, { useState } from 'react';
import { IStore } from '@src/type';
import { SHAPE_TYPE } from '@src/contants';
import { setModeTypeByAction } from '@src/store/actions';

import style from './style.module.scss';

interface IRightFeature {
  dispatch: any;
}

function RightFeature(props: IStore & IRightFeature) {
  const { modeType, dispatch } = props;
  const [show, setShow] = useState(false);

  const handleFold = () => {
    setShow((state) => !state);
  };

  const handleShape = (type: string) => {
    dispatch(setModeTypeByAction(type));
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
      <div className={`${style.fold} ${show && style.active}`} onClick={handleFold}></div>
    </div>
  );
}

export default RightFeature;
