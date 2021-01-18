import React, { useMemo, useReducer } from 'react';

import CanvasContainer from './modules/canvas';
import Brush from './modules/brush';
import LeftFeature from './modules/left-feature/index';
import RightFeature from './modules/right-feature';
import { WhiteBoadeContext, reducer, initialState } from '@src/store';

export default function Container() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <WhiteBoadeContext.Provider value={contextValue}>
      <CanvasContainer />
      <Brush />
      <LeftFeature />
      <RightFeature />
    </WhiteBoadeContext.Provider>
  );
}
