import React from 'react';

import { InterStore } from './types';
import { initialState } from './reducer';

interface IStore {
  store: InterStore;
  dispatch: (...args: any[]) => void;
}

const store: IStore = {
  store: initialState,
  dispatch: () => void 0,
};

const AppContext = React.createContext<IStore>(store);

export default AppContext;
