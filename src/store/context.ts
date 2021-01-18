import React from 'react';
import { IState, initialState, IAction } from './reducer';

const WhiteBoadeContext = React.createContext<{
  state: IState;
  dispatch: React.Dispatch<IAction>;
}>({
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
});

export default WhiteBoadeContext;
