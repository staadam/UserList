import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../utils/store/features/userSlice';
import { Avatar } from '../Avatar/Avatar';

import styles from './UserList.module.scss';

const sortUsersByDate = (users) => {
  return [...users].sort((user1, user2) => {
    return new Date(user1.registered?.date) - new Date(user2.registered?.date);
  });
};

export const UserList = ({ dataTestId = 'users' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { users, currentUser } = useSelector(({ users: { users, currentUser } }) => ({
    users,
    currentUser,
  }));
  const areUsersFetched = users.length > 0;

  const sortedUsers = sortUsersByDate(users);

  const toggleIsOpen = () => setIsOpen((prevState) => !prevState);

  if (!areUsersFetched) return;

  return (
    <div className={styles.userListWrapper} data-testid={dataTestId}>
      <Avatar img={currentUser.picture.medium} alt='Current user' onClick={toggleIsOpen} />
      {isOpen ? (
        <ul data-testid={`${dataTestId}-list`}>
          {sortedUsers.map((user, idx) => (
            <li
              onClick={() => dispatch(setCurrentUser(user))}
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
