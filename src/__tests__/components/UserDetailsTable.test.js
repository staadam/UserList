import { render, screen } from '@testing-library/react';
import { useEffect } from 'react';
import { useSetters } from '../../utils/store/hooks/useSetters';
import { UsersProvider } from '../../utils/store/store';
import { UserDetailsTable } from '../../components/UserDetailsTable/UserDetailsTable';

describe('Test UserDetailsTable component', () => {
  const mockedUser = {
    name: {
      first: 'Mike',
      surname: 'Wazowski',
    },
  };

  const RenderWithMockedCurrentUser = ({ children }) => {
    const { setCurrentUser } = useSetters();
    useEffect(() => {
      setCurrentUser(mockedUser);
    }, []);
    return <>{children}</>;
  };

  test('Table renders records with nested object', () => {
    render(
      <UsersProvider>
        <RenderWithMockedCurrentUser>
          <UserDetailsTable />
        </RenderWithMockedCurrentUser>
      </UsersProvider>
    );

    const tableElement = screen.getByTestId('table');

    expect(tableElement).toHaveTextContent('name.first');
    expect(tableElement).toHaveTextContent('name.surname');
  });
});
