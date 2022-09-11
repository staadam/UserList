import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';

describe('Test ErrorMessage component', () => {
  test('Renders provided message', () => {
    const message = 'Test error message';
    render(<ErrorMessage message={message} />);

    const errorElement = screen.getByText(message);

    expect(errorElement).toBeInTheDocument();
  });

  test('Renders default message', () => {
    const defaultMessage = 'Something went wrong. Please try again later.';
    render(<ErrorMessage />);

    const errorElement = screen.getByText(defaultMessage);

    expect(errorElement).toBeInTheDocument();
  });
});
