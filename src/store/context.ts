import React, { useContext } from 'react';
import { IState, initialState, IAction } from './reducer';

export const WhiteBoardContext = React.createContext<{
  state: IState;
  dispatch: React.Dispatch<IAction>;
}>({
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
});

export const WhiteBoardContextProvider = WhiteBoardContext.Provider;

export const UseWhiteBoardContext = () => {
  const context = useContext(WhiteBoardContext);
  return context;
};
