import { render, screen, fireEvent } from '@testing-library/react';
import { useEffect } from 'react';
import { useSetters } from '../../utils/store/hooks/useSetters';
import { UsersProvider } from '../../utils/store/store';
import { UserList } from '../../components/UserList/UserList';

describe('Test UserList component', () => {
  const mockedUsers = [
    {
      name: {
        first: 'Mike',
        surname: 'Wazowski',
      },
      registered: {
        date: '2016-03-25T10:26:09.885Z',
      },
      picture: {
        medium: 'currentUser.jpg',
      },
    },
    {
      name: {
        first: 'Walter',
        surname: 'White',
      },
      registered: {
        date: '2002-08-05T12:03:03.409Z',
      },
      picture: {
        medium: 'secondUser.jpg',
      },
    },
  ];

  const openUserList = () => {
    const avatarElement = screen.getByTestId('avatar');
    fireEvent.click(avatarElement);

    return avatarElement;
  };

  const RenderWithMockedUsers = ({ children }) => {
    const { setUsers } = useSetters();
    useEffect(() => {
      setUsers(mockedUsers);
    }, []);
    return <>{children}</>;
  };

  const UserListWithData = () => (
    <UsersProvider>
      <RenderWithMockedUsers>
        <UserList />
      </RenderWithMockedUsers>
    </UsersProvider>
  );

  test('UserList renders Avatar', () => {
    render(<UserListWithData />);
    const avatarElement = screen.getByTestId('avatar');
    const currentUser = mockedUsers[0];
    expect(avatarElement).toHaveAttribute('src', currentUser.picture.medium);
  });

  test('UserList is closed by default', () => {
    render(<UserListWithData />);
    const listElement = screen.queryByTestId('users-list');
    expect(listElement).toBe(null);
  });

  test('UserList is opened after clicking avatar', () => {
    render(<UserListWithData />);

    openUserList();
    const listElement = screen.getByTestId('users-list');

    expect(listElement).toBeInTheDocument();
  });

  test('UserList closes after clicking avatar second time', () => {
    render(<UserListWithData />);
    const avatarElement = screen.getByTestId('avatar');

    openUserList();
    fireEvent.click(avatarElement);
    const listElement = screen.queryByTestId('users-list');

    expect(listElement).toBe(null);
  });

  test('UserList is sorted by date in ascending order', () => {
    render(<UserListWithData />);
    const [youngUser, oldUser] = mockedUsers;

    openUserList();
    const [firstUser, secondUser] = screen.queryAllByTestId('users-list-element');

    expect(firstUser).toHaveTextContent(oldUser.name.first);
    expect(secondUser).toHaveTextContent(youngUser.name.first);
  });

  test('Clicking on list element changes current user', () => {
    render(<UserListWithData />);
    const secondUser = mockedUsers[1];
    const avatarElement = screen.getByTestId('avatar');

    openUserList();
    const secondUserElement = screen.queryAllByTestId('users-list-element')[0];
    fireEvent.click(secondUserElement);

    expect(avatarElement).toHaveAttribute('src', secondUser.picture.medium);
  });
});
