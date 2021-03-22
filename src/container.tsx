import React, { useMemo, useReducer } from 'react';

import CanvasContainer from './modules/canvas';
import BottomFeature from './modules/bottom-feature';
import LeftFeature from './modules/left-feature/index';
import RightFeature from './modules/right-feature';
import { WhiteBoardContextProvider, reducer, initialState } from '@src/store';

export default function Container() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <WhiteBoardContextProvider value={contextValue}>
      <CanvasContainer />
      <BottomFeature />
      <LeftFeature />
      <RightFeature />
    </WhiteBoardContextProvider>
  );
}
