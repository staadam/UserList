import { render, screen } from '@testing-library/react';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from '../../utils/store/store';
import { setCurrentUser } from '../../utils/store/features/userSlice';
import { UserDetailsTable } from '../../components/UserDetailsTable/UserDetailsTable';

describe('Test UserDetailsTable component', () => {
  const mockedUser = {
    name: {
      first: 'Mike',
      surname: 'Wazowski',
    },
  };

  const RenderWithMockedCurrentUser = ({ children }) => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setCurrentUser(mockedUser));
    }, []);
    return <>{children}</>;
  };

  test('Table renders records with nested object', () => {
    render(
      <Provider store={store}>
        <RenderWithMockedCurrentUser>
          <UserDetailsTable />
        </RenderWithMockedCurrentUser>
      </Provider>
    );

    const tableElement = screen.getByTestId('table');

    expect(tableElement).toHaveTextContent('name.first');
    expect(tableElement).toHaveTextContent('name.surname');
  });
});
