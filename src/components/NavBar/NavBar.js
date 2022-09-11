import { UserList } from '../UserList/UserList';

import styles from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <nav className={styles.navWrapper}>
      <h1>User details</h1>
      <UserList />
    </nav>
  );
};
