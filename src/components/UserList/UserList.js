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
  const { users, currentUser } = useSelector(({ users }) => users);
  const dispatch = useDispatch();

  const areUsersFetched = users.length > 0;
  if (!areUsersFetched) return;

  const sortedUsers = sortUsersByDate(users);

  const toggleIsOpen = () => setIsOpen((prevState) => !prevState);
  const handleOnClick = (user) => () => dispatch(setCurrentUser(user));

  return (
    <div className={styles.userListWrapper} data-testid={dataTestId}>
      <Avatar img={currentUser.picture.medium} alt='Current user' onClick={toggleIsOpen} />
      {isOpen ? (
        <ul data-testid={`${dataTestId}-list`}>
          {sortedUsers.map((user, idx) => (
            <li
              onClick={handleOnClick(user)}
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
