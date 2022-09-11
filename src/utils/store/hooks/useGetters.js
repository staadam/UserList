import { useContext } from 'react';
import { UsersContext } from '../store';

export const useGetters = () => {
  const userContextData = useContext(UsersContext);
  if (!userContextData) throw new Error();

  const { store } = userContextData;
  return {
    getUsers: () => store.users,
    getCurrentUser: () => store.currentUser,
    getErrorMessage: () => store.error,
  };
};
