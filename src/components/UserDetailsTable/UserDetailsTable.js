import { useGetters } from '../../utils/store/hooks/useGetters';
import { flatNestedObject } from '../../utils/helpers/flatNestedObject';
import { Table } from '../Table/Table';

export const UserDetailsTable = () => {
  const { getCurrentUser } = useGetters();
  const flatUserData = flatNestedObject(getCurrentUser());

  return <Table dataToShow={flatUserData} keyName={'user-data-table'} />;
};
