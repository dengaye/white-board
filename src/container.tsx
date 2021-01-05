import React, { useReducer } from 'react';

import CanvasContainer from './modules/canvas';
import Brush from './modules/brush';
import LeftFeature from './modules/left-feature/index';
import RightFeature from './modules/right-feature';
import { reducer, initialState } from '@src/store/reducer';

export default function Container() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <CanvasContainer {...state} dispatch={dispatch} />
      <Brush {...state} dispatch={dispatch} />
      <LeftFeature {...state} dispatch={dispatch} />
      <RightFeature {...state} dispatch={dispatch} />
    </div>
  );
}
