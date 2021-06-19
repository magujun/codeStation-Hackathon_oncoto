import { render, screen } from '@testing-library/react';
import { Pagination } from '.';

describe('Pagination component', () => {
  it('renders correctly', () => {
    render(
      <Pagination
        totalCountOfRegisters={4000}
        registersPerPage={1000}
        onPageChange={() => {}}
      />,
    );

    expect(screen.getByText('4000')).toBeInTheDocument();
  });

  it('renders last page button', () => {
    render(
      <Pagination
        totalCountOfRegisters={4000}
        registersPerPage={1000}
        onPageChange={() => {}}
      />,
    );

    // página 4
    expect(screen.getByText('4')).toBeInTheDocument();
  });
});
