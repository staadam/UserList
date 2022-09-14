import { useSelector } from 'react-redux';
import { flatNestedObject } from '../../utils/helpers/flatNestedObject';
import { Table } from '../Table/Table';

export const UserDetailsTable = () => {
  const currentUser = useSelector(({ users }) => users.currentUser);
  const flatUserData = flatNestedObject(currentUser);

  return <Table dataToShow={flatUserData} keyName={'user-data-table'} />;
};
