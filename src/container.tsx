import React, { useReducer, useMemo } from 'react';

import CanvasContainer from './modules/canvas';
import Brush from './modules/brush';
import LeftFeature from './modules/left-feature/index';

import AppContext from '@src/store/context/index';
import appReducer, { initialState } from '@src/store/context/reducer';

export default function Container() {
  const [store, dispatch] = useReducer(appReducer, initialState);
  const contextValue = useMemo(() => ({ store, dispatch }), [store, dispatch]);

  return (
    <AppContext.Provider
      value={{
        ...contextValue,
      }}
    >
      <CanvasContainer />
      <Brush />
      <LeftFeature />
    </AppContext.Provider>
  );
}
