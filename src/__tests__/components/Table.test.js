import { render, screen } from '@testing-library/react';
import { Table } from '../../components/Table/Table';

describe('Test Table component', () => {
  const mockedUser = {
    id: '000000000',
    name: 'Mike',
    surname: 'Wazowski',
  };

  test('Table renders provided records', () => {
    render(<Table dataToShow={mockedUser} dataTestId='table' />);

    const tableElement = screen.getByTestId('table');

    for (const recordHeader in mockedUser) {
      expect(tableElement).toHaveTextContent(recordHeader);
      expect(tableElement).toHaveTextContent(mockedUser[recordHeader]);
    }
  });

  test('Render empty table when data is not provided', () => {
    render(<Table dataTestId='table' />);
    const tableRows = screen.queryAllByTestId('table-row');
    expect(tableRows).toHaveLength(0);
  });
});
