import { useEffect } from 'react';
import { fetchUsers } from '../utils/helpers/fetchUsers';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers, setError } from '../utils/store/features/userSlice';

import { NavBar } from '../components/NavBar/NavBar';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { UserDetailsTable } from '../components/UserDetailsTable/UserDetailsTable';

export const UserDetailsPage = () => {
  const error = useSelector(({ users }) => users.error);
  const dispatch = useDispatch();

  const handleSetError = (error) => dispatch(setError(error));
  const handleSetUsers = (users) => dispatch(setUsers(users));

  useEffect(() => {
    fetchUsers(handleSetUsers, handleSetError);
  }, []);

  return (
    <div>
      <NavBar />
      {error ? <ErrorMessage message={error} /> : <UserDetailsTable />}
    </div>
  );
};
