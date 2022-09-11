import { render, screen } from '@testing-library/react';
import { UsersProvider } from '../../utils/store/store';
import { NavBar } from '../../components/NavBar/NavBar';

describe('Test NavBar component', () => {
  test('Navbar contains title', () => {
    render(
      <UsersProvider>
        <NavBar />
      </UsersProvider>
    );

    const headingElement = screen.getByText(/User details/i);

    expect(headingElement).toBeInTheDocument();
  });
});
