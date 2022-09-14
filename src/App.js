import { Provider } from 'react-redux';
import { store } from './utils/store/store';
import { UserDetailsPage } from './pages/UserDetailsPage';

export const App = () => {
  return (
    <Provider store={store}>
      <UserDetailsPage />
    </Provider>
  );
};
