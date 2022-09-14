import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../utils/store/store';
import { NavBar } from '../../components/NavBar/NavBar';

describe('Test NavBar component', () => {
  test('Navbar contains title', () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );

    const headingElement = screen.getByText(/User details/i);

    expect(headingElement).toBeInTheDocument();
  });
});
