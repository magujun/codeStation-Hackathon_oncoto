import { render, screen } from '@testing-library/react';
import { Datagrid } from '.';
import { DatagridColumn } from './Types';

describe('Datagrid component', () => {
  it('renders correctly', () => {
    const columns: DatagridColumn[] = [
      {
        field: 'id',
        headerName: 'Código',
        align: 'center',
        headerAlign: 'center',
        flex: 1,
      },
      {
        field: 'name',
        headerName: 'Nome',
        align: 'center',
        headerAlign: 'center',
        flex: 1,
      },
    ];

    const rows = [
      {
        id: 1,
        name: 'john',
      },
      {
        id: 2,
        name: 'may',
      },
      {
        id: 3,
        name: 'michael',
      },
    ];

    render(
      <Datagrid
        columns={columns}
        rows={rows}
        paddingCell={5}
        columnId="id"
        templateColumns="1fr"
      />,
    );

    const testGrid = screen.getByText('may');

    expect(testGrid).toBeInTheDocument();
  });
});
