import { useEffect } from 'react';
import { useGetters } from '../utils/store/hooks/useGetters';
import { useSetters } from '../utils/store/hooks/useSetters';
import { fetchUsers } from '../utils/helpers/fetchUsers';

import { NavBar } from '../components/NavBar/NavBar';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { UserDetailsTable } from '../components/UserDetailsTable/UserDetailsTable';

export const UserDetailsPage = () => {
  const { setUsers, setError } = useSetters();
  const { getErrorMessage } = useGetters();
  const error = getErrorMessage();

  useEffect(() => {
    fetchUsers(setUsers, setError);
  }, []);

  return (
    <div>
      <NavBar />
      {error ? <ErrorMessage message={error} /> : <UserDetailsTable />}
    </div>
  );
};
