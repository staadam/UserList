import { createContext, useState } from 'react';
import { createReducerActions } from './actions';

const initialStore = {
  users: [],
  currentUser: {},
  error: '',
};

const initialState = {
  actions: {},
  store: initialStore,
};

export const UsersContext = createContext(initialState);

export const UsersProvider = ({ children }) => {
  const [store, dispatch] = useState(initialStore);
  const actions = createReducerActions(dispatch);

  return <UsersContext.Provider value={{ store, actions }}>{children}</UsersContext.Provider>;
};
