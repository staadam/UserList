import { useContext } from 'react';
import { UsersContext } from '../store';
import { actionNames } from '../actions';

const { SET_USERS, SET_CURRENT_USER, SET_ERROR } = actionNames;

export const useSetters = () => {
  const userContextData = useContext(UsersContext);
  if (!userContextData) throw new Error();

  return {
    setUsers: (users) => {
      userContextData.actions[SET_USERS](users);
    },
    setCurrentUser: (user) => {
      userContextData.actions[SET_CURRENT_USER](user);
    },
    setError: (errorMessage) => {
      userContextData.actions[SET_ERROR](errorMessage);
    },
  };
};
