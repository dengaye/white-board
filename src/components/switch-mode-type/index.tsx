import React, { useState } from 'react';
import { SHAPE_TYPE } from '@src/contants';
import { UseWhiteBoardContext, ACTIONS } from '@src/store';

import style from './style.scss';

const SwitchModeType = () => {
  const { dispatch, state } = UseWhiteBoardContext();
  const { modeType } = state;
  const [show, setShow] = useState(false);

  const handleFold = () => {
    setShow((state) => !state);
  };

  const handleShape = (type: string) => {
    dispatch({ type: ACTIONS.SET_MODE_TYPE, payload: type });
    setShow(false);
  };

  return (
    <>
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
    </>
  );
};

export default React.memo(SwitchModeType);
