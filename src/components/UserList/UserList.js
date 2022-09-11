import { useState } from 'react';
import { useGetters } from '../../utils/store/hooks/useGetters';
import { useSetters } from '../../utils/store/hooks/useSetters';
import { Avatar } from '../Avatar/Avatar';

import styles from './UserList.module.scss';

const sortUsersByDate = (users) => {
  return [...users].sort((user1, user2) => {
    return new Date(user1.registered?.date) - new Date(user2.registered?.date);
  });
};

export const UserList = ({ dataTestId = 'users' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { getUsers, getCurrentUser } = useGetters();
  const { setCurrentUser } = useSetters();

  const sortedUsers = sortUsersByDate(getUsers());
  const currentUser = getCurrentUser();
  const areUsersFetched = sortedUsers.length > 0;

  const toggleIsOpen = () => setIsOpen((prevState) => !prevState);

  if (!areUsersFetched) return;

  return (
    <div className={styles.userListWrapper} data-testid={dataTestId}>
      <Avatar img={currentUser.picture.medium} alt='Current user' onClick={toggleIsOpen} />
      {isOpen ? (
        <ul data-testid={`${dataTestId}-list`}>
          {sortedUsers.map((user, idx) => (
            <li
              onClick={() => setCurrentUser(user)}
              data-testid={`${dataTestId}-list-element`}
              key={`userList-element-${idx}`}
            >
              {user.name.first}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
