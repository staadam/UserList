import { UsersProvider } from './utils/store/store';
import { UserDetailsPage } from './pages/UserDetailsPage';

export const App = () => {
  return (
    <UsersProvider>
      <UserDetailsPage />
    </UsersProvider>
  );
};
